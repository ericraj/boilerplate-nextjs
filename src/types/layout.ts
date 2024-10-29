import { ComponentProps } from "react";

export type RootLayoutProps = Required<Pick<ComponentProps<"div">, "children">>;
