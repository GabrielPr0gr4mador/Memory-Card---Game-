import JohnPerry from "./JohnPerry.webp";
import adamback from "./adamback.webp";
import davidchaum from "./davidchaum.webp";
import erichughes from "./erichughes.webp";
import halfinney from "./halfinney.png";
import johngilmore from "./johngilmore.webp";
import lensassaman from "./lensassaman.webp";
import nickszabo from "./nickszabo.webp";
import philzimmermann from "./philzimmermann.webp";
import weidai from "./weidai.webp";
import satoshinakamoto from "./satoshinakamoto.webp";
import allcyphers from "./allcyphers.webp";

export const cypherpunks: Card[] = [
    {
        name: "John Perry",
        src: JohnPerry,
        bio: "Filósofo e matemático que explorou ideias fundamentais sobre anonimato e privacidade digital."
    },
    {
        name: "Adam Back",
        src: adamback,
        bio: "Criador do Hashcash, tecnologia que inspirou o proof-of-work (mineração) do Bitcoin." 
    },
    {
        name: "David Chaum", 
        src: davidchaum,
        bio: "Inventor do dinheiro digital anônimo e pioneiro da criptografia moderna."
    },
    {
        name: "Eric Hughes", 
        src: erichughes,
        bio: "Fundador do movimento Cypherpunks e autor do manifesto sobre privacidade como liberdade."
    },
    {
        name: "Hal Finney", 
        src: halfinney,
        bio: "Programador que recebeu a primeira transação de Bitcoin e impulsionou sua adoção inicial."
    },
    {
        name: "John Gilmore", 
        src: johngilmore,
        bio: "John Gilmore em é um dos fundadores da Electronic Frontier Foundation, da lista de email Cypherpunks e Cygnus Solutions. Ele criou também alt.* hierarchy dentro da Usenet e é um dos participantes mais ativos do projeto GNU."
    },
    {
        name: "Len Sassaman",
        src: lensassaman,
        bio:"Criptógrafo que avançou mixnets e sistemas de comunicação anônima, além de contribuir altamente com PGP."
    },
    {
        name: "Nick Szabo",
        src: nickszabo,
        bio: "Criador do conceito de smart contracts e precursor do Bitcoin com o “bit gold”."
        },
    {
        name: "Phil Zimmerman",
        src: philzimmermann,
        bio: "Inventor do PGP, a ferramenta que colocou criptografia forte nas mãos de todos."
    },
     {
        name: "Wei Dai",
        src: weidai,
        bio: "Criptógrafo visionário, criador do b-money, a semente que inspirou o Bitcoin e a revolução das moedas digitais."
    },
    {
        name: "Who is Satoshi?",
        src: satoshinakamoto,
        bio: "Enigmático criador do Bitcoin, uma figura lendária e misteriosa cuja invenção inovadora e disruptiva desafia o poder de todos os Estados do mundo, tido como o maior cypherpunk de todos os tempos."
    },
    {
        name: "CypherMask",
        src: allcyphers,
        bio: "Um coletivo de visionários que defende privacidade absoluta e liberdade digital, usando criptografia como arma contra vigilância e controle estatal."
    },
]


export interface Card {
    name: string;
    src: string;
    bio: string;
}

export interface mixedCard extends Card {
    id: number;
}