export default function NotFound() {
  return (
    <div className="flex load-1 flex-col flex-nowrap justify-center items-start size-full">
      <h2 className="color-cream">404</h2>
      <h3 className="color-cream">You made an oopsie.</h3>
      <a className="btn mt-4" href="/"><span>Go Home</span></a>
    </div>
  );
}