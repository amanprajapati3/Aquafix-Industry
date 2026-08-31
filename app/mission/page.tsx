import Mission from "../components/layout/mission/Mission";
import { site } from "@/data";

export default function MissionPage() {
  return (
    <>
      <Mission visionMissionData={site.visionMission} />
    </>
  );
}