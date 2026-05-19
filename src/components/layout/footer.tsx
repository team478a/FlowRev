export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto max-w-screen-xl px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} FlowRev. All rights reserved.</p>
      </div>
    </footer>
  );
}
