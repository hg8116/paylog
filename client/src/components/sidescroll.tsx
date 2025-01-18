import blacksquare from '/blacksquare.png'
import chanel from '/chanel.png'
import citroen from '/citroen.png'
import dell from '/dell.png'
import figma from '/figma.png'
import kia from '/kia.png'
import netflix from '/netflix.png'
import opel from '/opel.png'
import puma from '/puma.png'
import vivo from '/vivo.png'

const Sidescroll = () => {

  return (
    <div className='h-[4rem] bg-[var(--green-500)] px-10 py-4 w-full flex flex-row justify-between items-center'>
      <img src={blacksquare} width={50} alt="blacksquare" />
      <img src={chanel} width={50} alt="chanel" />
      <img src={citroen} width={50} alt="citroen" />
      <img src={dell} width={50} alt="dell" />
      <img src={figma} width={50} alt="figma" />
      <img src={kia} width={50} alt="kia" />
      <img src={netflix} width={50} alt="netflix" />
      <img src={opel} width={50} alt="opel" />
      <img src={puma} width={50} alt="puma" />
      <img src={vivo} width={50} alt="vivo" />
    </div>
  )
}

export default Sidescroll 
