// Makes the docs' custom components available in every .md/.mdx file
// without an import line.
import MDXComponents from "@theme-original/MDXComponents";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import FeatureMeta, { RoleBadge } from "@site/src/components/FeatureMeta";

export default {
  ...MDXComponents,
  Tabs,
  TabItem,
  FeatureMeta,
  RoleBadge,
};
