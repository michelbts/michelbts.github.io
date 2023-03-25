import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Linkedin from "../images/svg/linkedin.svg"
import Instagram from "../images/svg/instagram.svg"
import Twitter from "../images/svg/twitter.svg"
import Facebook from "../images/svg/facebook.svg"
import Wordpress from "../images/svg/wordpress.svg"
import Spotify from "../images/svg/spotify.svg"
import Telegram from "../images/svg/telegram.svg"
import Pinterest from "../images/svg/pinterest.svg"
import Reddit from "../images/svg/reddit.svg"
import Whatsapp from "../images/svg/whatsapp.svg"
import Strava from "../images/svg/strava.svg"
import { SEO } from "../components/seo"

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isCliked, setIsCliked] = useState(false)

  useEffect(() => {
    const heightDiv = document.querySelector('#profile').clientHeight
    const mainDiv = document.getElementById('main-div')

    if( window.innerHeight < heightDiv) {
      mainDiv.classList.add('h-auto')
    } else {
      mainDiv.classList.add('h-screen')
    }

    window.matchMedia("(orientation: portrait)").addEventListener("change", e =>{
      if( window.innerHeight < heightDiv) {
        mainDiv.classList.add('h-auto')
        mainDiv.classList.remove('h-screen')
      } else {
        mainDiv.classList.add('h-screen')
        mainDiv.classList.remove('h-auto')
      }
    })
  }, [])

  const handleClick = () => {
    setIsMobile(window.innerWidth <= 640)
    setIsCliked(!isCliked)
  }

  return (
  <Layout>
    <div id="main-div" className={`flex flex-col`}>
      <div className={`bg-cover bg-center bg-[url('/hero-image.webp')] w-full h-full`}>
        <div id="profile" className="grid grid-cols-1 justify-items-center m-4">
          <StaticImage className={`${ isMobile  ? ( isCliked ? 'w-[128px] border-4' : 'w-[256px] border-8') : (isCliked ? 'w-[256px] border-8' : 'w-[356px] border-8') } border-orange-500 rounded-full m-4 transition-width duration-300`} src="../images/avatar.webp" alt="avatar" />
          <p className="font-sans font-bold text-2xl text-white mb-2">Michel Buschmann</p>
          <div className="flex flex-wrap justify-center w-[256px] mb-1">
            <a href="https://instagram.com/michelbts" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Instagram className="w-[24px] h-[24px]" />
            </a>
            <a href="https://twitter.com/michelbts_" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Twitter className="w-[24px] h-[24px]" />
            </a>
            <a href="https://facebook.com/michelbts" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Facebook className="w-[24px] h-[24px]" />
            </a>
            <a href="https://iphonedicas.com/author/michel/" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Wordpress className="w-[24px] h-[24px]" />
            </a>
            <a href="https://open.spotify.com/user/michelbts" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Spotify className="w-[24px] h-[24px]" />
            </a>
            <a href="https://t.me/michelbts" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Telegram className="w-[24px] h-[24px]" />
            </a>
            <a href="https://pinterest.com/michelbts_" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Pinterest className="w-[24px] h-[24px]" />
            </a>
            <a href="https://reddit.com/user/michelbts" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Reddit className="w-[24px] h-[24px]" />
            </a>
            <a href="https://linkedin.com/in/michelbts" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Linkedin className="w-[24px] h-[24px]" />
            </a>
            <a href="https://wa.me/5513996006770" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Whatsapp className="w-[24px] h-[24px]" />
            </a>
            <a href="https://strava.com/michelbts" className="flex bg-white hover:bg-gray-300 rounded-lg w-[32px] h-[32px] items-center justify-center m-1">
              <Strava className="w-[24px] h-[24px]" />
            </a>
          </div>
          <button className="p-2 m-2 rounded bg-orange-500 hover:bg-orange-600 font-semibold text-white" onClick={handleClick}>
            Sobre mim
          </button>
        </div>
      </div>

      <div className={`${ isCliked ? '' : 'hidden'} flex flex-wrap justify-center m-4`}>
        <div className="md:w-1/2 flex flex-wrap space-y-4 justify-center font-sans font-medium text-lg">
        <p className="text-justify">
          Brasileiro, nascido e crescido no Rio de Janeiro. Atualmente morando em Santos - SP. Possuo o Ensino Médio completo. Desde pequeno sempre querendo aprender algo novo, hoje sou apaixonado por tecnologia, fotografia, viagens, jogos, filmes/séries, músicas e tudo mais que há de bom na vida.
        </p>
        <p className="text-justify">
          Em 2014 ganhei meu primeiro iPhone, o qual me despertou vontade de pesquisar e conhecer tudo sobre ele; e sobre a Apple. Desde então, aprendi muita coisa a respeito do iOS e tecnologia em geral.
        </p>
        <p className="text-justify">
          Em 2016 tive minhas primeiras experiências como autor e redator de sites na plataforma WordPress, começando num blog amador de tecnologia (Raio Nerdizador); e logo depois num grande site com foco na Apple (iPhoneBrasil22, coordenado pelo Gustavo Michels), que chegou a ter seu próprio aplicativo publicado na App Store. Ambos os sites já não existem mais.
        </p>
        <p className="text-justify">
          Em meados do mesmo ano, o William Neves me deu a oportunidade de produzir conteúdo no iPhoneDicas, site onde me encontro até hoje (inclusive, nele aprendi muita coisa na época mencionada no segundo parágrafo). A partir dali, venho me especializando cada vez mais no assunto.
        </p>
        <p className="text-justify">
          Atualmente, sou editor-chefe e gerente de mídias sociais do iPhoneDicas. E a melhor parte disso tudo é poder ajudar a galerinha que tem iPhone. Mais sobre isso? Clique/toque aqui! =)
        </p>
        <p className="text-justify">
          Além do blog e consultorias para iPhone/iOS, em 2020 ingressei no projeto e fiz parte da equipe de uma clínica de telemedicina, a Cuidar.Online! E, no final de 2021, ingressei na Pearson Latam como assistente de suporte, onde me encontro no momento. Inclusive, também atuo no ramo de design gráfico/social media, informática e empréstimos.
        </p>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage

export const Head = () => {
  <SEO title="Romulo Menezes"/>
}
