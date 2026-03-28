interface SearchPageProps {
  searchParams: {
    subject?: string;
    class?: string;
    location?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-width py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-surface p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Search Preview</p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-text-primary">শিক্ষক খোঁজার ফলাফল</h1>
          <p className="mt-4 text-base leading-7 text-text-muted">
            এই route-এ search query successfully pass হচ্ছে। এখন backend/API connect করলে এখানেই filtered tutors show করা যাবে।
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Subject</p>
              <p className="mt-2 font-medium text-text-primary">{searchParams.subject || "Not selected"}</p>
            </div>
            <div className="rounded-2xl bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Class / Level</p>
              <p className="mt-2 font-medium text-text-primary">{searchParams.class || "Not selected"}</p>
            </div>
            <div className="rounded-2xl bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Location</p>
              <p className="mt-2 font-medium text-text-primary">{searchParams.location || "Not selected"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
