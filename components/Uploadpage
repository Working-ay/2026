import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Upload, Copy, Check, Loader2, X, KeyRound } from 'lucide-react';
import { Section } from './Section';

const TOKEN_KEY = 'zipline_token';

type Item = {
  id: string;
  name: string;
  preview: string;
  status: 'uploading' | 'done' | 'error';
  link?: string;
  error?: string;
};

const readToken = () => {
  try { return localStorage.getItem(TOKEN_KEY) || ''; } catch { return ''; }
};

const saveToken = (t: string) => {
  try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch {}
};

const toSiteLink = (ziplineUrl: string) => {
  const file = ziplineUrl.split('?')[0].split('/').filter(Boolean).pop() || '';
  return `${window.location.origin}/i/${file}`;
};

export const UploadPage: React.FC = () => {
  const [token, setToken] = useState(readToken);
  const [draft, setDraft] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [dragging, setDragging] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const update = (id: string, patch: Partial<Item>) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)));

  const uploadOne = useCallback(async (file: File) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const preview = file.type.startsWith('image/') ? URL.createObjectURL(file) : '';
    setItems((prev) => [{ id, name: file.name, preview, status: 'uploading' }, ...prev]);

    const body = new FormData();
    body.append('file', file);

    try {
      const res = await fetch('/zipline-api/upload', {
        method: 'POST',
        headers: { Authorization: token },
        body,
      });
      if (res.status === 401 || res.status === 403) throw new Error('Token rejected');
      if (!res.ok) throw new Error(`Upload failed (${res.status})`);
      const data = await res.json();
      const first = data?.files?.[0];
      const url: string | undefined = typeof first === 'string' ? first : first?.url;
      if (!url) throw new Error('No link returned');
      update(id, { status: 'done', link: toSiteLink(url) });
    } catch (e: any) {
      update(id, { status: 'error', error: e?.message || 'Upload failed' });
    }
  }, [token]);

  const handleFiles = useCallback((files: FileList | File[] | null) => {
    if (!files || !token) return;
    Array.from(files).forEach(uploadOne);
  }, [token, uploadOne]);

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const files = Array.from(e.clipboardData?.files || []);
      if (files.length) handleFiles(files);
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [handleFiles]);

  const copy = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopied(link);
    setTimeout(() => setCopied(null), 1500);
  };

  if (!token) {
    return (
      <Section id="upload" title="Upload" subtitle="Paste your Zipline token to start. It stays in this browser only.">
        <form
          onSubmit={(e) => { e.preventDefault(); const t = draft.trim(); if (t) { saveToken(t); setToken(t); } }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="flex-1 flex items-center gap-2 px-3 rounded-xl bg-surface border border-line focus-within:border-white/20">
            <KeyRound size={16} className="text-dim shrink-0" />
            <input
              type="password"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Zipline token"
              className="flex-1 bg-transparent py-2.5 text-sm text-ink placeholder:text-dim outline-none"
            />
          </div>
          <button className="px-4 py-2.5 rounded-xl bg-ink text-bg text-sm font-medium hover:bg-white transition-colors">
            Continue
          </button>
        </form>
      </Section>
    );
  }

  return (
    <Section id="upload" title="Upload" subtitle="Drop, pick or paste images. You get a link you can share anywhere.">
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
        className={`cursor-pointer rounded-2xl border border-dashed p-12 text-center transition-colors ${
          dragging ? 'border-white/40 bg-white/[0.04]' : 'border-white/15 bg-surface hover:bg-white/[0.02]'
        }`}
      >
        <Upload size={22} className="mx-auto text-muted" />
        <p className="mt-3 text-sm text-ink">Click to choose files or drag them here</p>
        <p className="mt-1 text-xs text-dim">You can also paste with Ctrl + V</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          hidden
          onChange={(e) => { handleFiles(e.target.files); e.target.value = ''; }}
        />
      </div>

      {items.length > 0 && (
        <ul className="mt-6 rounded-2xl border border-line bg-surface divide-y divide-line overflow-hidden">
          {items.map((it) => (
            <li key={it.id} className="flex items-center gap-3 p-3">
              <div className="w-12 h-12 rounded-lg bg-raised overflow-hidden shrink-0">
                {it.preview && <img src={it.preview} alt="" className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-ink truncate">{it.name}</p>
                {it.status === 'uploading' && <p className="text-xs text-dim">Uploading…</p>}
                {it.status === 'error' && <p className="text-xs text-muted">{it.error}</p>}
                {it.status === 'done' && (
                  <a href={it.link} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-ink font-mono truncate block">
                    {it.link}
                  </a>
                )}
              </div>
              {it.status === 'uploading' && <Loader2 size={16} className="animate-spin text-dim" />}
              {it.status === 'error' && <X size={16} className="text-dim" />}
              {it.status === 'done' && (
                <button
                  onClick={() => copy(it.link!)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line text-xs text-muted hover:text-ink hover:bg-white/5 transition-colors"
                >
                  {copied === it.link ? <Check size={12} /> : <Copy size={12} />}
                  {copied === it.link ? 'Copied' : 'Copy'}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => { saveToken(''); setToken(''); setDraft(''); }}
        className="mt-6 text-xs text-dim hover:text-ink transition-colors"
      >
        Forget token
      </button>
    </Section>
  );
};