# 🏆 SW중심대학 공동 해커톤 2022 교내 선발전

- 주제 : "디지털 전환을 이끄는 힘, 소프트웨어"
- 제목 : 집에서 연습하는 회화, 홈피크(Homepeak)

## 🗺 내용

[ETRI 발음평가 API](https://aiopen.etri.re.kr/guide_pronunciation.php#group00)를 활용해, 사용자가 생성한 스크립트의 모범 발음을 들어보거나, 직접 스크립트를 읽고 발음을 평가받을 수 있는 웹앱 어플리케이션입니다.

추가 기능으로는 누적된 발음평가 점수 기반의 랭킹 페이지 UI와, 내 가입 정보를 확인할 수 있는 마이페이지 UI를 구현했습니다.

또한 PWA를 활용해 마치 네이티브 어플리케이션을 사용하는 것과 유사한 경험을 주려 시도했으며, 하루라는 제한된 시간동안 목표를 달성하기 위해 퍼블릭 클라우드 인프라(AWS EC2, RDS) & VSCode Live Share 기능을 활용했습니다.

## 🖥 서비스 아키텍처

![](https://user-images.githubusercontent.com/26535030/168459466-7f4f081e-c44c-45cd-b555-f3ec4c68d373.png)

## 📸 스크린샷

<div style="display: flex; width: 100%;">
<img width="250" alt="image" src="https://user-images.githubusercontent.com/26535030/168459814-5e7ff6dc-5294-446f-9bca-06d141bb17e1.png">
<img width="250" alt="스크린샷 2022-05-15 오후 3 09 16" src="https://user-images.githubusercontent.com/26535030/168459777-ba3ccd04-2215-4bf2-a6f3-fdfd0ae15853.png">
<img width="250" alt="스크린샷 2022-05-15 오후 2 59 06" src="https://user-images.githubusercontent.com/26535030/168459369-9761c7c4-5bd9-402b-ac56-1e6d98cab109.png">
<img width="250" alt="스크린샷 2022-05-15 오후 2 59 11" src="https://user-images.githubusercontent.com/26535030/168459368-f30c88f7-3598-47eb-8487-12683d8c0957.png">
</div>

## 🧑🏻‍💻 팀원

<table>
  <tr>
    <td align="center" width="100px">
      <a href="https://github.com/kimtaehyun98" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/65909160?v=4" />
      </a>
    </td>
    <td align="center" width="100px">
      <a href="https://github.com/70825" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/79046106?v=4"  />
      </a>
    </td>
    <td align="center" width="100px">
      <a href="https://github.com/suhwan-cheon" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/52690419?v=4" />
      </a>
    </td>
    <td align="center" width="100px">
      <a href="https://github.com/c17an" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/26535030?v=4" />
      </a>
    </td>
    <td align="center" width="100px">
      <a href="https://github.com/Youngseo-Jeon0313" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/81344634?v=4"  />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/kimtaehyun98" target="_blank">
        김태현<br />(Back-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/70825" target="_blank">
        정다빈<br />(Back-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/suhwan-cheon" target="_blank">
        천수환<br />(Back-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/c17an" target="_blank">
        김찬민<br />(Front-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Youngseo-Jeon0313" target="_blank">
        전영서<br />(Front-end)
      </a>
    </td>
  </tr>
</table>

## 🎯 해결했던 이슈

- 프론트엔드에서 마이크 기능을 활성화하려면 반드시 HTTPS 위에 배포해야만 합니다.  
  그러나, EC2의 퍼블릭 엔드포인트는 기본적으로 HTTP 위에서 배포되어 [Mixed Content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) 이슈를 경험하게 되었습니다.

  이를 해결하기 위해 백엔드에서는 SSL 인증서를 적용한 도메인을 Nginx에 입힌 후, 해당 도메인으로 전달되는 요청을 EC2로 프록시해 HTTPS-HTTPS 간의 통신을 구현해내 Mixed Content 이슈를 해결할 수 있었습니다.
