import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-hero-gradient px-6 text-center">
      <span className="text-7xl">🧭</span>
      <h1 className="text-4xl font-extrabold text-ink">אופס, איבדנו את המפה...</h1>
      <p className="max-w-md text-lg text-ink-muted">
        העמוד שחיפשתם לא נמצא. אולי כדאי לחזור למסע מההתחלה?
      </p>
      <Button href="/">חזרה לעמוד הבית</Button>
    </main>
  );
}
