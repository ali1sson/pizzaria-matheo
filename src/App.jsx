import { TbMotorbike } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { LuLeaf } from "react-icons/lu";
import { ImFire } from "react-icons/im";
import { RiHeart3Line } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

import logo from "./img/logo.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"
import img7 from "./img/img7.png"
import img8 from "./img/img8.png"
import img9 from "./img/img9.png"
import img10 from "./img/img10.png"


function App() {
 
  return (
    <>
      <section className="cores">
        <div className="verde"></div>
        <div className="amarelo"></div>
        <div className="vermelho"></div>
      </section>
      <nav className="caixaDeMenu">
        <img src={logo} alt="" />

        <section className="menu">
          <ul>
            <li><a href="">iNÍCIO</a></li>
            <li><a href="#CARDAPIO">CARDÁPIO</a></li>
            <li><a href="#SOBRENÓS">SOBRE NÓS</a></li>
            <li><a href="#CONTATO">CONTATO</a></li>
          </ul>
        </section>

        

        <section>
          <label htmlFor="menu-mobile">
            <input id="menu-mobile" type="checkbox" class="input"></input>
            <IoMenu className="menuHamburguer"/>
          </label>

        </section>
      </nav>

      



      {/* etapa 2 */}


      <main className="perfil">
        <section className="caixaDePerfil">

            <h1>
              O VERDADEIRO <br />
              <span className="descar1">SABOR DA</span> <br />
              <span className="descar2">ITÁLIA!</span>
              
              
            </h1>
            
      <p>Massas artesanais, ingredientes selecionados
e muito amor em cada pizza.</p>
          <a href="#CARDAPIO"><LiaPizzaSliceSolid /> VER CARDÁPIO</a>

        </section>
      </main>


      <main className="caixaDecarte">
        <section>
          <LuLeaf className="destacar3"/>

          <div>
            <h1>INGREDIENTES</h1>
           <p> FRESCOS</p>
           </div>
          
        </section>
          
        <section>
        <ImFire className="destacar4"/>
          <div>
            <h1>FORNO A LENHA</h1>
            <p>TRADICIONAL</p>
            </div>
          
        </section>

        <section>
          <RiHeart3Line className="destacar5"/>
        
          <div>
            <h1>FEITO COM</h1>
            <p>AMOR</p>
            </div>
          
        </section>

        <section>
           <TbMotorbike className="destacar6"/>
          
          <div>
            <h1>ENTREGA RÁPIDA</h1>
            <p>E SEGURA</p>
            </div>
          
        </section>
        
        
      </main>


      {/* 4 etapa */}


      <h1 className="destacar7">NOSSAS PIZZAS</h1>
      <main id="CARDAPIO" className="caixaDeCardapio">
        
        <section>
          <img src={img1} alt="" />
          <div>
            <h1>Margherita</h1>
            <p> Molho de tomate, muçarela (ou fior di latte), manjericão fresco e azeite.</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>
          </div>
        </section>
        <section>
          <img src={img2} alt="" />
          <div>
            <h1>Marinara</h1>
            <p> A mais básica e antiga, leva molho de tomate, alho, orégano e azeite (sem queijo)</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section><section>
          <img src={img3} alt="" />
          <div>
            <h1>Quattro Formaggi</h1>
            <p>Combina quatro queijos italianos autênticos, geralmente muçarela, gorgonzola, fontina e parmesão</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section><section>
          <img src={img4} alt="" />
          <div>
            <h1>Diavola</h1>
            <p> Molho de tomate, muçarela e o clássico salame picante italiano (piccante)</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section><section>
          <img src={img5} alt="" />
          <div>
            <h1>Capricciosa</h1>
            <p>Leva molho de tomate, muçarela, presunto cozido, cogumelos, alcachofras e azeitonas</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section><section>
          <img src={img6} alt="" />
          <div>
            <h1>Quattro Stagioni</h1>
            <p>Dividida em quatro seções que representam as estações do ano: presunto, cogumelos, alcachofras e azeitonas</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section><section>
          <img src={img7} alt="" />
          <div>
            <h1>Prosciutto e Funghi</h1>
            <p> Coberta com molho de tomate, muçarela, presunto cru ou cozido e cogumelos frescos</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section><section>
          <img src={img8} alt="" />
          <div>
            <h1>Pizza alla Bufala</h1>
            <p>Uma variação da Margherita que substitui o queijo comum por cremosa muçarela de búfala</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section><section>
          <img src={img9} alt="" />
          <div>
            <h1>Ortolana / Vegetariana</h1>
            <p>Base de molho de tomate ou apenas queijo, incrementada com vegetais frescos da estação como abobrinha e berinjela</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section>
        <section>
          <img src={img10} alt="" />
          <div>
            <h1>Frutti di Mare</h1>
            <p>Uma homenagem à tradição litorânea, com molho de tomate e frutos do mar frescos (como mexilhões e camarões), geralmente sem queijo</p>
            <a href="https://wa.me/5599988877766" target="_blank">Falar no WhatsApp</a>

          </div>
        </section>
      </main>
      {/* 5 etapa */}

      <section id="SOBRENÓS" className="caixaDeHistoria">
        <h1>Nossa História</h1>
        <p>Tudo começou com uma viagem à Itália.</p>
        <p>Em 2012, Matheo, apaixonado pela culinária italiana desde criança, teve a oportunidade de conhecer Nápoles e se encantou pela tradição das pequenas pizzarias napolitanas. Foi ali que descobriu que uma boa pizza não precisa de dezenas de ingredientes — apenas de uma massa bem preparada, ingredientes de qualidade e muito respeito pela tradição.</p>
        <p>De volta ao Brasil, Matheo começou a preparar pizzas para amigos e familiares, sempre buscando reproduzir os sabores que havia conhecido na Itália. O que começou como uma paixão de fim de semana logo ganhou novos admiradores.</p>
        <p>Em 2016, nasceu a nossa pizzaria.</p>
        <p>Desde então, mantemos o mesmo propósito: trazer para a mesa uma verdadeira experiência italiana. Nossa massa é preparada artesanalmente e passa por um longo processo de fermentação, enquanto nossos ingredientes são escolhidos para valorizar o sabor e a simplicidade de cada receita.</p>
        <p>Do clássico *Margherita* à tradicional *Marinara, passando pela intensa **Diavola* e pela nossa *Quattro Formaggi*, cada pizza carrega um pouco da história e da cultura italiana.</p>
        <p>Hoje, continuamos fazendo pizza como acreditamos que ela deve ser feita: *artesanal, simples e cheia de sabor.</p>
        <p>Benvenuti! <LiaPizzaSliceSolid /> </p>
      </section>

      {/* 6 etapa */}
        <h1 className="contatoH1">CONTATO</h1>
        <h2 className="contatoH2">Fale conosco, será um prazer atender você!</h2>
      <main id="CONTATO" className="caixaDeContato">
        
        <section className="cardDeContato">
          <div>
            <BsTelephone className="destacar8"/>
            <a  href="https://wa.me/5599988877766" target="_blank">  <span>Telefone/Whatsapp</span>  <br />  +55 99 988877766</a>
          </div>

          <div>
            <MdOutlineEmail  className="destacar9"/>
            <a href="mailto:contato@pizzeriamatheo.com.br">  <span>E-mail</span> <br />  contato@pizzeriamatheo.com.br  </a>
          </div>

          <div>
            <IoLocationOutline  className="destacar8"/>
            <a href="#"> <span>Endereço</span> <br />  Rua das Oliveiras, 125 — Centro</a>
          </div>
          <div>
          <LuClock  className="destacar9"/>
            <a href="#"><span>Horário de funcionamento</span> <br />Segunda a quinta: 18:00 às 23:00 <br />

Sexta e sábado: 18:00 às 00:00 <br />

Domingo: 18:00 às 23:00 <br />

Terça-feira: fechado</a>
          </div>


          
          </section>
          
          <section className="caixaDelink">
          <p>Estamos também  <span>nas redes sociais!</span></p>
          
            <a href="https://www.instagram.com/pizzeriamatheo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><FaInstagram className="destacar10" /></a>
            <a href="https://wa.me/5599988877766" target="_blank"><FaWhatsapp className="destacar11"/></a>

          
          </section>

        

      </main>


      
    </>
  )
}

export default App
