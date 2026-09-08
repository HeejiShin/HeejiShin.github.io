import CaseStudyPage from '../case-study-page';

export const dynamic = 'force-static';

export default function TitaPage() {
  return (
    <CaseStudyPage
      title="긍정적인 습관 형성을 돕는 AI 습관 추천 서비스 TITA"
      image="/assets/case-tita.png"
      height={12140}
      links={[{
        href: 'https://drive.google.com/file/d/1OBfmgCOlvdHC2aR9VFBsP5uwx2XVwYLl/view?usp=drive_link',
        label: '티타 서비스디자인 학술 논문 보기',
        x: 564,
        y: 6514,
        width: 170,
        height: 30,
      }]}
    />
  );
}
