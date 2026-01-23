import HeroInner from "@/components/sections/hero/HeroInner";
import IndustryDetailsPrimary from "@/components/sections/industries/IndustryDetailsPrimary";
import { industriesData } from "@/data/industriesData";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const IndustryDetailsMain = ({ currentItemId }) => {
    const items = industriesData;
    const currentId = currentItemId;
    const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
        getPreviousNextItem(items, currentId);
    const { title } = currentItem || {};

    return (
        <div>
            <HeroInner
                title={title ? title : "Industry Details"}
                text={title ? title : "Industry Details"}
                breadcrums={[{ name: "Industries", path: "/industries" }]}
            />
            <IndustryDetailsPrimary
                option={{
                    currentItem,
                    items,
                    currentId,
                    prevId,
                    nextId,
                    isPrevItem,
                    isNextItem,
                }}
            />
        </div>
    );
};

export default IndustryDetailsMain;
