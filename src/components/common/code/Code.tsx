import React, { ReactElement } from "react";
import classnames from "classnames";
const Code = ({
  children,
  syntax,
}: {
  children?: ReactElement;
  syntax?: string;
}) => {
  let lines: Array<string> = [];
  if (children?.props?.children) {
    lines = children?.props.children.split("\n");
    if (lines[0].trimStart() === "") lines.shift();
  }

  const onClickCopy = () => {
    navigator.clipboard.writeText(children?.props.children);
  };

  const countWhiteSpaces = (line: string): number => {
    return line.length - line.trimStart().length;
  };

  const getMinTab = (lines: Array<string>): number => {
    const tabsInLines = lines.map((line) => countWhiteSpaces(line));
    console.log(tabsInLines);
    return Math.min.apply(Math, tabsInLines);
  };

  const tabsPadding = [
    "pl-[16px]",
    "pl-[32px]",
    "pl-[48px]",
    "pl-[64px]",
    "pl-[80px]",
    "pl-[96px]",
    "pl-[112px]",
    "pl-[128px]",
    "pl-[142px]",
    "pl-[158px]",
    "pl-[172px]",
  ];

  const minTabs = getMinTab(lines);
  const code = lines.map((line) => ({
    line,
    tabs: countWhiteSpaces(line) - minTabs,
  }));
  return (
    <div className="grid grid-cols-1 bg-black p-3">
      <div className="relative h-4">
        <button
          onClick={() => onClickCopy()}
          className="absolute right-0 rounded-md bg-white p-2 opacity-20 hover:opacity-100"
        >
          <p className="font-light">Copy Code</p>
        </button>
      </div>
      <div className="grid grid-cols-[min-content_auto] gap-x-8">
        {code.map(({ line, tabs }, index: number) => (
          <React.Fragment key={index}>
            <div className="select-none text-right font-mono text-[#5E646E]">
              {index + 1}
            </div>
            <div
              className={classnames(
                tabsPadding[tabs],
                "h-[max(24px, max-content)]"
              )}
            >
              <div className="flex flex-wrap">
                <p className="font-mono text-white">
                  {line.split(" ").map((word: string, index: number) => (
                    <React.Fragment key={index}>
                      <span style={{ color: getColor(word) }}>
                        {word + " "}
                      </span>
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Code;

const getColor = (word: string) => {
  switch (word) {
    case "import":
    case "export":
    case "if":
    case "else":
    case "return":
    case "from":
      return "#B37EB5";
    case "const":
    case "=>":
      return "#5D8FCC";
    case "{":
    case "}":
    case "{}":
    case "(":
    case ")":
    case "()":
      return "#F7D437";
    case ">":
    case "<":
    case "/>":
    case "<p":
    case "<p>":
    case "</p>":
    case "<img>":
    case "<img":
    case "</img>":
      return "#4B6E9A";
    default:
      return "white";
  }
};
