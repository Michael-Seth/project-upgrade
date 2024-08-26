import IconCloud from "../external/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "expressdotjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "aws",
  "mongodb",
  "jest",
  "tailwindcss",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "nestdotjs"
];

export function IconzCloud() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
