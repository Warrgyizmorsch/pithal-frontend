import { cityRouteMetadata, renderCityRoute, type CityRouteProps } from "@/components/city/CityRoute";

export const dynamic = "force-dynamic";
export const generateMetadata = (props: CityRouteProps) => cityRouteMetadata(props, true);
export default function Page(props: CityRouteProps) { return renderCityRoute(props, true); }
