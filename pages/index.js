import BannerSectionAndSearch from "@/components/Home/BannerSectionAndSearch";
import Services from "@/components/Home/services/Services";
import Statics from "@/components/Home/Statics";

export default function Home() {
  return (
    <div>
      <BannerSectionAndSearch />
      <Services />
      <Statics />
    </div>
  );
}
