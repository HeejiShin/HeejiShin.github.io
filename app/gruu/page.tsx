import CaseStudyPage from '../case-study-page';

export const dynamic = 'force-static';

export default function GruuPage() {
  return (
    <CaseStudyPage
      title="아파트 내 공유형 스마트팜 서비스 그루"
      image="/assets/case-gruu.png"
      height={11360}
      videos={[{
        src: 'https://www.youtube.com/embed/JGNTc60UewQ',
        title: '그루 서비스 소개 영상',
        x: 320,
        y: 9895,
        width: 1280,
        height: 720,
      }]}
    />
  );
}
