import Image from 'next/image';
import RevealOnViewImage from './reveal-on-view-image';

const awards = [
  {
    date: '24.11',
    title: '대학생 디자인 학술발표대회 - 우수상',
    organization: '한국디자인학회',
    href: 'https://www.sungshin.ac.kr/bbs/main_kor/3192/137560/artclView.do',
  },
  {
    date: '25.06',
    title: 'POSCO ESG Level Up Ground - 최우수상',
    organization: '포스코홀딩스\n및 포스텍 지속가능연구소',
    href: 'https://isr.postech.ac.kr/index.php/archives/25502',
  },
  {
    date: '25.11',
    title: '제 60회 대한민국 디자인 전람회 - 입선',
    organization: '산업통상자원부\n및 한국디자인진흥원',
    href: 'https://award.kidp.or.kr/Exhibit/index_gd_view.do?idx_exhibit=55419',
  },
];

const projects = [
  {
    title: "빅데이터 기반 배리어프리 맵핑 커뮤니티 서비스 ‘유윌'",
    subtitle: '2024 대학생 디자인 학술발표대회(DSUS) 우수상',
    image: '/assets/project-yuwill.png',
  },
  {
    title: '긍정적인 습관 형성을 돕는 AI 습관 추천 서비스 ‘TITA’',
    subtitle: '영문 리서치 · 데이터 분석 · AI 활용 기획 · UX 설계',
    image: '/assets/project-tita.png',
  },
  {
    title: '모의에서 실전까지 증권뉴비 올인원 플랫폼 ‘원하나’',
    subtitle: '금융 서비스 기획 프로젝트',
    image: '/assets/project-wonhana.png',
  },
  {
    title: "느린학습자의 자립을 돕는 AI 일상 훈련 서비스 ‘터틀링'",
    subtitle: '제 60회 대한민국 디자인 전람회 입선',
    image: '/assets/project-turtling.png',
  },
  {
    title: '아파트 내 공유형 스마트팜 서비스 ‘Gruu’',
    subtitle: '기업 연계 산학협력 프로젝트 1위 선정',
    image: '/assets/project-gruu.png',
  },
  {
    title: '국립중앙도서관 웹페이지 사용성 개선 프로젝트',
    subtitle: 'Tobii 아이트래킹 · Maze 사용성 테스트 · UX 개선',
    image: '/assets/project-library.png',
  },
];

const skills = [
  { label: 'Figma', image: '/assets/skill-01.png' },
  { label: 'Tobii', image: '/assets/skill-02.png' },
  { label: 'Maze', image: '/assets/skill-03.png' },
  { label: 'Photoshop', image: '/assets/skill-04.png' },
  { label: 'Illustrator', image: '/assets/skill-05.png' },
  { label: 'Premiere Pro', image: '/assets/skill-06.png' },
  { label: 'After Effects', image: '/assets/skill-07.png' },
  { label: 'Google Sheets', image: '/assets/skill-08.png', large: true },
  { label: 'Google Looker Studio', image: '/assets/skill-09.png', shadow: true },
  { label: 'Google Analytics', image: '/assets/skill-10.png', shadow: true },
  { label: 'Oracle', image: '/assets/skill-11.png' },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <Image
        src={project.image}
        alt={project.title}
        width={1920}
        height={1080}
        sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1920px) 39.17vw, 752px"
        className="project-card__image"
        unoptimized
      />
      <h3>{project.title}</h3>
      <p>{project.subtitle}</p>
    </article>
  );
}

function SkillTrack() {
  return (
    <div className="skills-marquee" aria-label="활용 툴">
      <div className="skills-track">
        {[0, 1].map((group) => (
          <ul aria-hidden={group === 1} key={group}>
            {skills.map((skill) => (
              <li
                className={[
                  'skill-item',
                  skill.large ? 'skill-item--large' : '',
                  skill.shadow ? 'skill-item--shadow' : '',
                ].filter(Boolean).join(' ')}
                key={`${group}-${skill.label}`}
              >
                <Image
                  src={skill.image}
                  alt={group === 0 ? skill.label : ''}
                  width={skill.large ? 125 : 100}
                  height={skill.large ? 125 : 100}
                  className={skill.large ? 'skill-logo skill-logo--large' : 'skill-logo'}
                  unoptimized
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="portfolio-shell">
        <section className="hero" aria-labelledby="hero-title">
          <Image className="hero-art hero-art--blue" src="/assets/hero-blue.svg" alt="" width={700} height={700} priority unoptimized />
          <Image className="hero-art hero-art--white" src="/assets/hero-white.svg" alt="" width={700} height={700} priority unoptimized />
          <h1 id="hero-title">PoRTFoLio</h1>
          <div className="hero-intro">
            <p>여러 프로젝트에서 566명의 사용자를 만나</p>
            <p>그들의 니즈와 페인포인트를 경험으로 설계한 기획자 <strong>신희지</strong>입니다.</p>
          </div>
          <div className="hero-values" aria-label="핵심 가치">
            <p><strong>문제 &amp; 니즈</strong>를 발견</p>
            <p><strong>경험</strong>으로 설계</p>
            <p><strong>가치</strong>를 확산</p>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <Image className="about-white-art" src="/assets/about-white.svg" alt="" width={3380} height={1770} unoptimized />
          <RevealOnViewImage className="about-blue-art" src="/assets/about-blue.svg" width={200} height={200} />
          <h2 id="about-title">ABOUT ME</h2>

          <section className="resume-block work-block">
            <h3>Work</h3>
            <div className="resume-row">
              <time>25.07<br />~ 25.12</time>
              <div>
                <h4>KOICA(한국국제협력단) 홍보실 뉴미디어(인턴)</h4>
                <ul>
                  <li>온라인 홍보 콘텐츠 촬영 및 편집, 제작</li>
                  <li>온라인 홍보 콘텐츠 촬영 및 편집, 홍보 실무 업무 지원,<br />KOICA SNS 홍보콘텐츠 기획 및 제작등</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="resume-block education-block">
            <h3>Education</h3>
            <div className="resume-row">
              <time>21.03<br />~ 26.08</time>
              <div>
                <h4>성신여자대학교 서비스디자인공학과 졸업예정</h4>
                <ul>
                  <li>전체평점 3.82/4.5</li>
                  <li>서비스 기획 트랙 이수, 서비스/UX 디자인 트랙 이수</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="resume-block award-block">
            <h3>Award</h3>
            <div className="award-list">
              {awards.map((award) => (
                <div className="award-row" key={award.date}>
                  <time>{award.date}</time>
                  <a href={award.href} target="_blank" rel="noreferrer">{award.title}</a>
                  <p>{award.organization}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-block oversea-block">
            <h3>Oversea Experience</h3>
            <p><time>05.08 ~ 07.08</time><span>캐나다, 킹스턴</span></p>
            <p><time>09.09 ~ 12.12</time><span>케냐, 나이로비</span></p>
          </section>

          <section className="resume-block english-block">
            <h3>English</h3>
            <div><span>TOIEC - <strong>915점</strong></span><span>OPIC - IH</span></div>
          </section>
        </section>

        <SkillTrack />

        <section className="projects" id="uxui" aria-labelledby="uxui-title">
          <h2 id="uxui-title">UX/UI PROJECT</h2>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>

        <section className="marketing" id="marketing" aria-labelledby="marketing-title">
          <h2 id="marketing-title">PR/MARKETING PROJECT</h2>
          <a className="koica-card" href="/koica/" aria-label="KOICA 홍보실 뉴미디어 파트 인턴 상세 보기">
            <ProjectCard project={{
              title: 'KOICA 홍보실 뉴미디어 파트 인턴',
              subtitle: 'SNS 채널 운영 · 콘텐츠 기획/제작 · 트렌드 리서치 · 홍보 캠페인 실무',
              image: '/assets/project-koica.png',
            }} />
          </a>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title" className="sr-only">CONTACT</h2>
          <Image className="contact-white-art" src="/assets/contact-blue.svg" alt="" width={3020} height={1590} unoptimized />
          <RevealOnViewImage className="contact-blue-art" src="/assets/contact-white.svg" width={200} height={200} />
          <div className="contact-details">
            <div className="contact-email"><strong>E - M A I L</strong><a href="mailto:heeji.shin@gmail.com">heeji.shin@gmail.com</a></div>
            <div className="contact-tel"><strong>Tel</strong><a href="tel:+821023171194">+82 010-2317-1194</a></div>
          </div>
        </section>
      </div>
    </main>
  );
}
