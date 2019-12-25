import React, { FC, ReactNode } from 'react';
import s from './home.scss';
import { Map, Marker } from 'react-kakao-maps';

interface Program {
  time: string;
  title: string;
}

interface Question {
  q: string;
  a: ReactNode;
}

const Home: FC = () => {
  const programs: Program[] = [
    { time: '6:30', title: '입장' },
    { time: '00:00', title: '미정' },
    { time: '00:00', title: '미정' },
    { time: '00:00', title: '미정' },
    { time: '10:30', title: '마감' },
  ];

  const questions: Question[] = [
    {
      q: 'S.O.P.T 운영팀 홈커밍데이는 어떤 행사인가요?',
      a: (
        <span>
          역대 SOPT 운영팀원들이 기수 제한 없이 함께 모여
          <br />
          네트워킹하는 신년맞이 제 1회 운영팀 홈커밍 행사입니다.
        </span>
      ),
    },
    {
      q: '행사 기획팀에 참여할 수 있나요?',
      a: (
        <span>
          신청폼에 행사 기획 참여, 혹은 따로 문의를 주신다면
          <br />
          언제든지 함께 홈커밍 기획에 참여 할 수 있습니다.
        </span>
      ),
    },
    {
      q: '신청 기간을 놓쳤는데 추가로 신청을 받나요?',
      a: (
        <span>
          대관 장소 최대 인원수가 채워지지 않는다면
          <br />
          추가로 신청을 하실 수 있습니다.
        </span>
      ),
    },
    {
      q: '행사 비용은 어디에 쓰이나요?',
      a: (
        <span>
          대관 장소와 음식 준비에 쓰이며
          <br />
          사용 내역은 투명하게 공개됩니다.
        </span>
      ),
    },
  ];

  return (
    <div className={s.mainContainer}>
      <div className={s.titleArea}>
        <h1 className={s.title}>
          S.O.P.T
          <br />
          1st
          <br />
          TIMMY
          <br />
          HOMECOMING
        </h1>
        <div className={s.categoryWrapper}>
          <div className={s.categoryItem}>TIMMY</div>
          <div className={s.categoryItem}>Program</div>
          <div className={s.categoryItem}>Register</div>
        </div>
      </div>
      <div className={s.timmyArea}>
        <h1 className={s.title}>
          Hello
          <br />
          TIMMY
          <br />
          🥳
        </h1>
        <div className={s.contentWrapper}>
          <div className={s.backgroundOval} />
          <div className={s.context}>
            제 1회 SOPT 운영팀 HOMECOMING PARTY 개최
            <br />
            2020년, 한 해가 밝아오는 신년.
            <br />
            SOPT의 뜨거운 열정을 불태워 자리를 빛낼 여러분을
            <br />
            HOMECOMING PARTY에 초대합니다.
          </div>
        </div>
        <div className={s.timmyList}>
          <h1 className={s.title}>역대 운영팀</h1>
          <div className={s.timmyItemList}>
            <div className={s.timmyItem}>
              <img src="https://timmy-asset.s3.amazonaws.com/25.png" alt="25기 운영팀장" />
              <div className={s.itemTitle}>고진우</div>
              <div className={s.itemSubTitle}>25기 운영팀장</div>
            </div>
            <div className={s.timmyItem}>
              <img src="https://timmy-asset.s3.amazonaws.com/24.png" alt="24기 운영팀장" />
              <div className={s.itemTitle}>백예은</div>
              <div className={s.itemSubTitle}>24기 운영팀장</div>
            </div>
            <div className={s.timmyItem}>
              <img src="https://timmy-asset.s3.amazonaws.com/23.png" alt="23기 운영팀장" />
              <div className={s.itemTitle}>김현진</div>
              <div className={s.itemSubTitle}>23기 운영팀장</div>
            </div>
            <div className={s.timmyItem}>
              <img src="https://timmy-asset.s3.amazonaws.com/22.png" alt="22기 운영팀장" />
              <div className={s.itemTitle}>유현영</div>
              <div className={s.itemSubTitle}>22기 운영팀장</div>
            </div>
            <div className={s.timmyItem}>
              <img src="https://timmy-asset.s3.amazonaws.com/21.png" alt="21기 운영팀장" />
              <div className={s.itemTitle}>이승수</div>
              <div className={s.itemSubTitle}>21기 운영팀장</div>
            </div>
            <div className={s.timmyItem}>
              <img src="https://timmy-asset.s3.amazonaws.com/19.png" alt="19기 운영팀장" />
              <div className={s.itemTitle}>이재현</div>
              <div className={s.itemSubTitle}>19기 운영팀장</div>
            </div>
          </div>
          <div className={s.guideText}>* 운영팀장들의 제공된 사진 자료만 사용했습니다.</div>
        </div>
      </div>
      <div className={s.programArea}>
        <h1 className={s.title}>Program</h1>
        <div className={s.programList}>
          {programs.map(p => {
            return (
              <div className={s.listRow}>
                <div className={s.listItem}>
                  <div className={s.oval} />
                </div>
                <div className={s.listItem}>
                  <div>{p.time}</div>
                </div>
                <div className={s.listItem}>
                  <div>{p.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.qnaArea}>
        <h1 className={s.title}>QnA</h1>
        <div className={s.qnaList}>
          {questions.map((question, i) => {
            return (
              <div className={s.questionItem}>
                <div className={s.numberOval}>{i + 1}</div>
                <div>
                  <div className={s.question}>{question.q}</div>
                  <div className={s.answer}>{question.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.whereArea}>
        <h1 className={s.title}>Where?</h1>

        <div className={s.mapContainer}>
          <Map
            options={{
              center: new daum.maps.LatLng(37.49514, 127.0387729),
              level: 3,
            }}
          >
            <Marker
              options={{
                position: new daum.maps.LatLng(37.49514, 127.0387729),
              }}
            />
          </Map>
        </div>
        <div className={s.mapContext}>
          <div className={s.categoryItem}>
            <div className={s.categoryTitle}>📍 주소</div>
            <div className={s.categoryText}>서울특별시 강남구 역삼동 790-10 청연빌딩 1층 릿커피앤비어 (Lit)</div>
          </div>
          <div className={s.categoryItem}>
            <div className={s.categoryTitle}>🚗 교통</div>
            <div className={s.categoryText}>
              지하철 : 역삼역(2호선) 2번 출구 도보 10분
              <br />
              버스 : 4211 (약 10분)
              <br />
              주차 가능
            </div>
          </div>
          <div className={s.categoryItem}>
            <div className={s.categoryTitle}>✉️ 문의</div>
            <div className={s.categoryText}>
              유현영 : 010-5006-0804
              <br />
              김현진 : 010-4521-1998
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
