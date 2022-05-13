const Footer = () => {
  return (
    <footer className="absolute flex items-center justify-between bottom-0 w-screen h-16 bg-blue-100 px-8">
      <p>TEAM TALKY<span className="text-blue-500">TALKY</span> @2021</p>
      <div className="text-gray-400 text-sm">본 서비스는 <a href="https://aiopen.etri.re.kr/guide_pronunciation.php"
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:underline"
      >ETRI(한국전자통신연구원) 발음평가 API</a>와 <a href="https://cloud.google.com/text-to-speech?hl=ko"
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:underline">
          GOOGLE 음성 합성 API</a>를 활용합니다.
      </div>
    </footer >
  )
}

export default Footer
