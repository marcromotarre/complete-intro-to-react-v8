import pages from "../../../data/LateralMenu";

const PageButton = ({ page, level = 0 }: { page: Page; level?: number }) => {
  console.log(page);
  return (
    <div className="grid grid-cols-1 justify-start gap-y-2">
      <button className="w-max" style={{ marginLeft: `${20 * level}px` }}>
        {page.name}
      </button>
      {page.children &&
        page.children.map((subpage: Page) => (
          <PageButton
            key={`${page.name}_${page.path}`}
            page={subpage}
            level={level + 1}
          />
        ))}
    </div>
  );
};

const LateralMenu = () => {
  return (
    <>
      {pages.map((page: Page, index: number) => (
        <PageButton key={page.path} page={page} />
      ))}
    </>
  );
};

export default LateralMenu;

type Page = {
  name: string;
  path: string;
  children?: Array<Page>;
};
