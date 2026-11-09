import { BrandButton, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center pt-28 text-center">
      <h1 className="font-display text-4xl">Stránka sa nenašla</h1>
      <p className="mt-3 text-muted">Požadovaná stránka neexistuje alebo bola presunutá.</p>
      <div className="mt-6">
        <BrandButton href="/">Späť na úvod</BrandButton>
      </div>
    </Container>
  );
}
