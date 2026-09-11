/**
 * Sets the document title (and, optionally, description) for the current
 * route. React 19 hoists <title>/<meta> tags rendered anywhere in the tree
 * up into <head> automatically, so this needs no portal or effect — just
 * render it once per page.
 */
export function PageMeta({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <title>{`${title} · WeCare Hospitals`}</title>
      {description && <meta name="description" content={description} />}
    </>
  );
}
