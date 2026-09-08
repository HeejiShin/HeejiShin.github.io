import CaseStudyPage from '../case-study-page';

export const dynamic = 'force-static';

export default function WonhanaPage() {
  return (
    <CaseStudyPage
      title="증권뉴비 올인원 플랫폼 원하나"
      image="/assets/case-wonhana.png"
      height={10800}
      videos={[{
        src: 'https://www.youtube.com/embed/rsDB94e3pzY',
        title: '원하나 서비스 프로토타입',
        x: 120,
        y: 5940,
        width: 640,
        height: 360,
      }]}
    />
  );
}
