import CaseStudyPage from '../case-study-page';

export const dynamic = 'force-static';

export default function YuwillPage() {
  return (
    <CaseStudyPage
      title="빅데이터 기반 배리어프리 맵핑 커뮤니티 서비스 유윌"
      image="/assets/case-yuwill.jpg"
      height={11740}
      videos={[{
        src: 'https://www.youtube.com/embed/SUg8D5j20ho',
        title: '유윌 사용 시나리오',
        x: 320,
        y: 5476,
        width: 1280,
        height: 720,
      }]}
      links={[{
        href: 'https://drive.google.com/file/d/1YVFO0XKxvS9TDUCUbKMuMiYXWxguF9BX/view?usp=drive_link',
        label: '유윌 발표자료 보기',
        x: 1510,
        y: 11119,
        width: 155,
        height: 30,
      }]}
    />
  );
}
