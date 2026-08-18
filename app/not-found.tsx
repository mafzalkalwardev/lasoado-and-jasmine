import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/ui/StarDivider";

export default function NotFound() {
  return (
    <section className="navy-panel grain min-h-[70svh] flex items-center px-6 pt-32 pb-20 text-cream">
      <div className="relative z-[2] mx-auto max-w-xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold">This lane is empty.</h1>
        <StarDivider className="mt-6 mb-6" />
        <p className="text-cream/75">The page you requested is not on our routes.</p>
        <div className="mt-8">
          <Button href="/">Return home</Button>
        </div>
      </div>
    </section>
  );
}
