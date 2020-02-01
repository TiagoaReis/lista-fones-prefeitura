import React from 'react';
import { Text, View , FlatList, Linking, ScrollView} from 'react-native';
import padrao from '../estilos/padrao'
import { ListItem } from 'react-native-elements'
import tel from '../../assets/tel.png'

function Telefones(){
    const list = [
        {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Ave Dr. Breno Soares Maia, 670",
              Nome: "ADVP - Associacao dos Deficientes Visuais",
              Telefone: "(35) 3521-3045"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Rua Antonio Ouvadio de Carvalho, 75",
              Nome: "APAC - Assoc. Protecao e Assist. aos Condenados",
              Telefone: "(35) 3526-7058"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Rua da Imprensa, 195 - Belo Horizonte",
              Nome: "APAE - Assoc. de Pais e Amigos dos Excepcionais",
              Telefone: "(35) 3529-1700"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Rua Imaculada Conceicao, 1000 - Penha",
              Nome: "Associoacao Deus Provera",
              Telefone: "(35) 3521-6627"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Rua CÃ¡ssia, 205 - SÃ£o Benedito",
              Nome: "Associoacao Beneficente Sal e Luz da Terra",
              Telefone: "(35) 9115-0820"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Rua GonÃ§alves Dias, 397",
              Nome: "Associoacao EspÃ­rita Santo Agostinho",
              Telefone: "(35) 3521-6150"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Casa SÃ£o JosÃ©, Rua Serrania, 46 - Cohab I",
              Nome: "Associoacao Pequena Escola Gratuita SÃ£o JosÃ©",
              Telefone: "(35) 3521-0093"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Rua dos Contabilistas, 277 - Novo Horizonte",
              Nome: "Cantina Dona Bernadete Lemos",
              Telefone: "(35) 3522-8767"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Rua Monfort, 10 - Novo Horizonte",
              Nome: "CAPP - Centro de Aprendizagem PrÃ³-Menor",
              Telefone: "(35) 3521-3979"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Rua Santo Anibal Maria Di Francia, 181",
              Nome: "EducandÃ¡rio Senhor Bom Jesus dos Passos",
              Telefone: "(35) 3521-2145"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Ave Arlindo Figueiredo, 3002",
              Nome: "Lar SÃ£o Vicente - Sociedade SÃ£o Vicente de Paulo",
              Telefone: "(35) 3521-0403"
              },
              {
              Departamento: "Entidades Inscritas no Conselho Municipal de Assistencia Social",
              Endereco: "Ave Comendador Fco Avelino Maia, 3770",
              Nome: "SAMP - Sociedade de AssistÃªncia ao Menor",
              Telefone: "(35) 3521-5579"
              },
              {
              Departamento: "Gabinete do Prefeito",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 3Âº Andar",
              Nome: "Assessoria de Imprensa",
              Telefone: "(35) 3522-6347"
              },
              {
              Departamento: "Gabinete do Prefeito",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 3Âº Andar",
              Nome: "Controladoria Geral do MunicÃ­pio",
              Telefone: "(35) 3522-7254"
              },
              {
              Departamento: "Gabinete do Prefeito",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 2Âº Andar",
              Nome: "Defesa Civil",
              Telefone: "(35) 3522-8626"
              },
              {
              Departamento: "Gabinete do Prefeito",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 1Âº Andar",
              Nome: "Portaria Protocolo Geral",
              Telefone: "(35) 3522-7191"
              },
              {
              Departamento: "Gabinete do Prefeito",
              Endereco: "Rua Elvira Silveira Coimbra, 131 - Centro",
              Nome: "Procuradoria Geral do MunicÃ­pio",
              Telefone: "(35) 3522-7056"
              },
              {
              Departamento: "Gabinete do Prefeito",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 2Âº Andar",
              Nome: "Protocolo Gabinete",
              Telefone: "(35) 3522-7083"
              },
              {
              Departamento: "Gabinete do Prefeito",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 2Âº Andar",
              Nome: "RecepÃ§Ã£o Gabinete",
              Telefone: "(35) 3522-7087"
              },
              {
              Departamento: "Hospitais",
              Endereco: "",
              Nome: "Hospital Otto Krakauer",
              Telefone: "(35) 3529-1850"
              },
              {
              Departamento: "Hospitais",
              Endereco: "",
              Nome: "Hospital Regional do CÃ¢ncer",
              Telefone: "(35) 3529-1439"
              },
              {
              Departamento: "Hospitais",
              Endereco: "",
              Nome: "Hospital SÃ£o JosÃ© Unimed",
              Telefone: "(35) 3529-2450"
              },
              {
              Departamento: "Hospitais",
              Endereco: "",
              Nome: "Santa Casa de MisericÃ³rdia de Passos",
              Telefone: "(35) 3529-1411"
              },
              {
              Departamento: "Outros",
              Endereco: "",
              Nome: "Corpo de Bombeiros",
              Telefone: "(35) 3522-8762"
              },
              {
              Departamento: "Outros",
              Endereco: "Rua Bernardino Vieira, 413",
              Nome: "Delegacia da Mulher",
              Telefone: "(35) 3521-6042"
              },
              {
              Departamento: "Outros",
              Endereco: "",
              Nome: "Delegacia PolÃ­cia Civil",
              Telefone: "(35) 3522-7241"
              },
              {
              Departamento: "Outros",
              Endereco: "",
              Nome: "Detran",
              Telefone: "(35) 3522-7625"
              },
              {
              Departamento: "Outros",
              Endereco: "Ave Perimetral, 800",
              Nome: "IML Instituto MÃ©dico Legal",
              Telefone: ""
              },
              {
              Departamento: "Outros",
              Endereco: "",
              Nome: "MinistÃ©rio do Trabalho",
              Telefone: "(35) 3521-8808"
              },
              {
              Departamento: "Outros",
              Endereco: "",
              Nome: "PolÃ­cia Militar",
              Telefone: "(35) 3526-9992"
              },
              {
              Departamento: "Outros",
              Endereco: "",
              Nome: "PolÃ­cia Militar - RodoviÃ¡ria",
              Telefone: "(35) 3522-4184"
              },
              {
              Departamento: "Procon",
              Endereco: "Ave Paulo Esper Pimenta, 151",
              Nome: "Procon Legislativo (CÃ¢mara Municipal)",
              Telefone: "(35) 3521-9111"
              },
              {
              Departamento: "Procon",
              Endereco: "Rua dos Engenheiros, 199",
              Nome: "Procon Municipal (UAI Passos)",
              Telefone: "(35) 3526-5955"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Rua dos Engenheiros, 664 - Belo Horizonte",
              Nome: "Almoxarifado Central",
              Telefone: "(35) 3522-7103"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Praca Geraldo da Silva Maia, 175 - TÃ©rreo",
              Nome: "AssistÃªncia MÃ©dica ao Servidor",
              Telefone: "(35) 3522-6135"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Praca Gerado da Silva Maia, 175 - 3Âº Andar",
              Nome: "ComissÃ£o de LicitaÃ§Ã£o e PregÃ£o",
              Telefone: "(35) 3522-7223"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 3Âº Andar",
              Nome: "Departamento de Compras",
              Telefone: "(35) 3522-7059"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Rua dos Engenheiros, 664 - Belo Horizonte",
              Nome: "Departamento de Frota",
              Telefone: "(35) 3521-6026"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 2Âº Andar",
              Nome: "Departamento de Pessoal",
              Telefone: "(35) 3522-7064"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Rua dos Engenheiros, 539 - Belo Horizonte",
              Nome: "Junta Militar",
              Telefone: "(35) 3521-5164"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Praca Geraldo Silva Maia, 175 - 3Âº Andar",
              Nome: "Pedido de LÃ¢mpadas Cemig",
              Telefone: "(35) 3522-7215"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 3Âº Andar",
              Nome: "Secretaria Mun. de AdministraÃ§Ã£o",
              Telefone: "(35) 3522-7086"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "Terminal RodoviÃ¡rio",
              Telefone: "(35) 3522-6704"
              },
              {
              Departamento: "Secretaria Mun. de Administracao ",
              Endereco: "Rua dos Engenheiros, 539 - Belo Horizonte",
              Nome: "Tiro de Guerra",
              Telefone: "(35) 3521-5834"
              },
              {
              Departamento: "Secretaria Mun. de Cultura e PatrinÃ´nio HistÃ³rico",
              Endereco: "Praca Geraldo da Silva Maia - Casa da Cultura",
              Nome: "Biblioteca Municipal",
              Telefone: "(35) 3522-6481"
              },
              {
              Departamento: "Secretaria Mun. de Cultura e PatrinÃ´nio HistÃ³rico",
              Endereco: "PalÃ¡cio da Cultura - PÃ§a Geraldo da Silva Maia",
              Nome: "Departamento de Cultura",
              Telefone: "(35) 3522-7050"
              },
              {
              Departamento: "Secretaria Mun. de Cultura e PatrinÃ´nio HistÃ³rico",
              Endereco: "Ave Perimetral s/nÂº Coimbras",
              Nome: "EstaÃ§Ã£o Cultura - Centro de MemÃ³ria",
              Telefone: "(35) 3522-7193"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua Duque de Caxias, 46 - SÃ£o Francisco",
              Nome: "Centro Pop Rua",
              Telefone: "(35) 3521-8592"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Ave Arouca, 753 - Bairro Centro",
              Nome: "Conselho Municipal de AssistÃªncia Social",
              Telefone: "(35) 3522-7446"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Ave Arouca, 753 - Bairro Centro",
              Nome: "Conselho Municipal Direitos CrianÃ§a e Adolescente",
              Telefone: "(35) 3522-7446"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua Santo Onofre, 174 - Carmelo",
              Nome: "Conselho Tutelar",
              Telefone: "(35) 3522-7231"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "0800 283 7231",
              Nome: "Conselho Tutelar",
              Telefone: ""
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua PratÃ¡polis, 1105 Bairro Coimbras",
              Nome: "CRAS Coimbras",
              Telefone: "(35) 3526-5126"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua dos Bororos, 155 - Nossa Sra Aparecida",
              Nome: "CRAS Nossa Sra Aparecida",
              Telefone: "(35) 3522-7178"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua Jangada, 82 - Bairro Novo Horizonte",
              Nome: "CRAS Novo Horizonte",
              Telefone: "(35) 3522-7842"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua Pitangui, 33 - Bairro Penha",
              Nome: "CRAS Penha",
              Telefone: "(35) 3526-7900"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua AlpinÃ³polis, 375 - Canjeranus",
              Nome: "CRAS Santa Luzia",
              Telefone: "(35) 3522-3838"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua BarÃ£o de Passos, 812 - Bairro Carmelo",
              Nome: "CREAS",
              Telefone: "(35) 3522-7047"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Rua TrÃªs de Maio, 151 - Bairro Centro",
              Nome: "Programa Bolsa FamÃ­lia - CadÃšnico",
              Telefone: "(35) 3522-7324"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Ave Arlindo Figueiredo, 1001 - Terminal RodoviÃ¡ria",
              Nome: "Programa de AtenÃ§Ã£o ao Migrante",
              Telefone: "(35) 3521-0038"
              },
              {
              Departamento: "Secretaria Mun. de Desenvolvimento Social, Trabalho e Renda",
              Endereco: "Avenida Comendador Frco Avelino Maia - antigo terminal rodoviÃ¡rio",
              Nome: "Secretaria - recepÃ§Ã£o",
              Telefone: "(35) 3522-7012"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "(35) 9 9100-1437",
              Nome: "AABB Comunidade (ConvÃªnio)",
              Telefone: ""
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Praca Geraldo Silva Maia - Casa da Cultura",
              Nome: "Administrativo EducaÃ§Ã£o - RecepÃ§Ã£o",
              Telefone: "(35) 3522-7027"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Pardal, 512 - Bairro Nossa Sra das GraÃ§as",
              Nome: "CAE Luciana da Silva Borges - Centro Atendimento",
              Telefone: "(35) 3521-0805"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Rio TietÃª, 529 - Bairro Santa Luzia",
              Nome: "CEMEI Astrogilda CorrÃªa Barbosa",
              Telefone: "(35) 3526-3133"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua do Moinho, 300 - CasarÃ£o",
              Nome: "CEMEI Maria Helena Vieira Lemos Maia",
              Telefone: "(35) 3526-6231"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Turquesa, 1660 - Bairro AclimaÃ§Ã£o",
              Nome: "CEMEI MÃºcio de Alencar Viana",
              Telefone: "(35) 3522-9912"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua PratÃ¡polis, 1065 - Bairro Nossa Sra FÃ¡tima",
              Nome: "CEMEI ProfÂª Ivanize Prado de Vasconcelos",
              Telefone: "(35) 3521-4804"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Vespasiano, 1025 - Bairro Penha",
              Nome: "CEMEI ProfÂª Maria de Lourdes Vasc. Moura - TUTUKA",
              Telefone: "(35) 3526-7088"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Elzo Calixto Mattar, 1415 Bairro N. Sra. das GraÃ§as",
              Nome: "CEMEI ProfÂª Maria Gomes de Vasconcelos Marino",
              Telefone: "(35) 3522-4487"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "",
              Nome: "CEMEI ProfÂª Pioleti Piassi Nogueira",
              Telefone: "(35) 3521-0614"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Ave Arlindo Figueiredo, 931 - SÃ£o Francisco",
              Nome: "CEMEI SÃ£o Francisco",
              Telefone: "(35) 3521-9749"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Joaquim Rodrigues, 21 - Primavera II",
              Nome: "CEMEI Sueli Imaculada de Souza",
              Telefone: "(35) 3521-5203"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Praca Geraldo Silva Maia - Casa da Cultura",
              Nome: "CoordenaÃ§Ã£o de Cursos",
              Telefone: "(35) 3522-6039"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Praca Geraldo Silva Maia - Casa da Cultura",
              Nome: "Departamento de EducaÃ§Ã£o",
              Telefone: "(35) 3522-7213"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Praca Geraldo Silva Maia - Casa da Cultura",
              Nome: "Departamento de Transporte Escolar",
              Telefone: "(35) 3522-9839"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Praca Geraldo Silva Maia - Casa da Cultura",
              Nome: "Departamento PedagÃ³gico",
              Telefone: "(35) 3522-8639"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Ponta PorÃ£, 450 - Bairro Bela Vista",
              Nome: "Escola Mun. Angela Aparecida da Silveira",
              Telefone: "(35) 3526-8493"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "(35) 9 8863-7843",
              Nome: "Escola Mun. Cel. Azarias de Melo",
              Telefone: ""
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "(35) 9 9925-1803",
              Nome: "Escola Mun. Dr. Manoel Patti",
              Telefone: ""
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Darcy de Paula Silveira, 10",
              Nome: "Escola Mun. EmÃ­lia Leal de Mello",
              Telefone: "(35) 3522-1430"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "(35) 9 8863-7841",
              Nome: "Escola Mun. Geralda CÃ¢ndida Oliveira",
              Telefone: ""
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Joaquim Piantino, 83 - Bairro SÃ£o Benedito",
              Nome: "Escola Mun. Luzia de Abreu",
              Telefone: "(35) 3522-8708"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "(35) 9 8802-4683",
              Nome: "Escola Mun. Oilda ValÃ©ria Silveira Coelho",
              Telefone: ""
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Travessa 18 de Setembro, 155 - Bairro Penha",
              Nome: "Escola Mun. ProfÂª AmÃ©lia Jabace",
              Telefone: "(35) 3521-0020"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Cel. Neca Medeiros, 181 - Centro",
              Nome: "Escola Mun. ProfÂª Francina de Andrade",
              Telefone: "(35) 3522-7697"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Estrada Passos/Santa Rita de CÃ¡ssia, 4 ou Rua BraganÃ§a, 225 - Cohab",
              Nome: "Escola Mun. ProfÂª Jalile Barbosa Calixto",
              Telefone: "(35) 3522-7204"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Avenida Perimetral, 538 - Bairro Coimbras",
              Nome: "Escola Mun. ProfÂº Ananias Emerenciano",
              Telefone: "(35) 3522-7135"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Opala, 495 - Bairro AclimaÃ§Ã£o",
              Nome: "Escola Mun. ProfÂº Hilarino Moraes",
              Telefone: "(35) 3521-2854"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Vereador AntÃ´nio MagalhÃ£es Silveira, 240",
              Nome: "Escola Mun. ProfÂº Silas Roberto Figueiredo",
              Telefone: "(35) 3522-7957"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Dr. Bernardino Vieira, 249 - Bairro Centro",
              Nome: "Merenda Escolar - P.M.A.E.",
              Telefone: "(35) 3522-7186"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Santo Anibali Maria de Francia, 181 - Centro",
              Nome: "Polo UAITEC",
              Telefone: "(35) 3526-7697"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Guanabara, 875 - Bairro Jardim Polivalente",
              Nome: "PrÃ© Escola Municipal ProfÂª Ana Maria Ribeiro",
              Telefone: "(35) 3526-3068"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "Rua Santo Anibali Maria de Francia, 181 - Centro",
              Nome: "Projeto Tempo Integral EDUCA MAIS",
              Telefone: "(35) 3526-1270"
              },
              {
              Departamento: "Secretaria Mun. de Educacao ",
              Endereco: "",
              Nome: "UAB Projeto MEC",
              Telefone: "(35) 3526-4715"
              },
              {
              Departamento: "Secretaria Mun. de Esporte, Lazer e Juventude",
              Endereco: "Rua PratÃ¡polis, 1105 Bairro Coimbras",
              Nome: "CEU Programa 2Âº Tempo",
              Telefone: "(35) 3521-0302"
              },
              {
              Departamento: "Secretaria Mun. de Esporte, Lazer e Juventude",
              Endereco: "PalÃ¡cio da Cultura - PÃ§a Geraldo da Silva Maia",
              Nome: "Departamento de Esporte",
              Telefone: "(35) 3522-7048"
              },
              {
              Departamento: "Secretaria Mun. de Esporte, Lazer e Juventude",
              Endereco: "Rua Barrinha, sem nÃºmero",
              Nome: "GinÃ¡sio Elzo Calixto Mattar",
              Telefone: "(35) 3522-7122"
              },
              {
              Departamento: "Secretaria Mun. de Esporte, Lazer e Juventude",
              Endereco: "Rua Sexta Chapada, 328 - Centro",
              Nome: "PraÃ§a de Esportes BarÃº de PÃ¡dua",
              Telefone: "(35) 3522-8462"
              },
              {
              Departamento: "Secretaria Mun. de Fazenda",
              Endereco: "Praca Geraldo da Silva Maia, 175 - TÃ©rreo",
              Nome: "Departamento Cadastro TÃ©cnico - IPTU",
              Telefone: "(35) 3522-7126"
              },
              {
              Departamento: "Secretaria Mun. de Fazenda",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 1Âº Andar",
              Nome: "Departamento de Contabilidade",
              Telefone: "(35) 3522-7031"
              },
              {
              Departamento: "Secretaria Mun. de Fazenda",
              Endereco: "Praca Geraldo da Silva Maia, 175 - TÃ©rreo",
              Nome: "Departamento de Rendas",
              Telefone: "(35) 3522-6062"
              },
              {
              Departamento: "Secretaria Mun. de Fazenda",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 1Âº Andar",
              Nome: "Departamento de Rendas e FiscalizaÃ§Ã£o",
              Telefone: "(35) 3521-6812"
              },
              {
              Departamento: "Secretaria Mun. de Fazenda",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 1Âº Andar ",
              Nome: "Tesouraria",
              Telefone: "(35) 3522-7016"
              },
              {
              Departamento: "Secretaria Mun. de IndÃºstria, ComÃ©rcio e Turismo",
              Endereco: "",
              Nome: "Aeroporto Municipal JosÃ© Figueiredo",
              Telefone: "(35) 3526-7688"
              },
              {
              Departamento: "Secretaria Mun. de IndÃºstria, ComÃ©rcio e Turismo",
              Endereco: "",
              Nome: "Secretaria Mun. de IndÃºstria, ComÃ©rcio e Turismo",
              Telefone: "(35) 3522-7282"
              },
              {
              Departamento: "Secretaria Mun. de Meio Ambiente, AgropecuÃ¡ria e Abastecimento",
              Endereco: "",
              Nome: "Estradas Rurais - Britadouro",
              Telefone: "(35) 3522-6712"
              },
              {
              Departamento: "Secretaria Mun. de Meio Ambiente, AgropecuÃ¡ria e Abastecimento",
              Endereco: "PÃ§a. Geraldo da Silva Maia, 175 - 2Âº Andar",
              Nome: "Secretaria Mun. de Meio Ambiente, AgropecuÃ¡ria e A",
              Telefone: "(35) 3522-6729"
              },
              {
              Departamento: "Secretaria Mun. de Obras, Hab. e Servicos Urbanos",
              Endereco: "Rua Tenente Vasconcelos, 187 - Bairro Centro",
              Nome: "Departamento de Limpeza Urbana",
              Telefone: "(35) 3522-7095"
              },
              {
              Departamento: "Secretaria Mun. de Obras, Hab. e Servicos Urbanos",
              Endereco: "Rua Tenente Vasconcelos, 187 - Bairro Centro",
              Nome: "Departamento de Obras PÃºblicas",
              Telefone: "(35) 3522-6243"
              },
              {
              Departamento: "Secretaria Mun. de Obras, Hab. e Servicos Urbanos",
              Endereco: "",
              Nome: "FÃ¡brica de Blocos",
              Telefone: "(35) 3522-7226"
              },
              {
              Departamento: "Secretaria Mun. de Obras, Hab. e Servicos Urbanos",
              Endereco: "",
              Nome: "Portaria Britadouro",
              Telefone: "(35) 3522-7105"
              },
              {
              Departamento: "Secretaria Mun. de Planejamento",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 2Âº Andar",
              Nome: "Departamento de OrÃ§amento",
              Telefone: "(35) 3522-6034"
              },
              {
              Departamento: "Secretaria Mun. de Planejamento",
              Endereco: "Rua dos Engenheiros, 664 - Bairro Belo Horizonte",
              Nome: "Departamento de TrÃ¢nsito",
              Telefone: "(35) 3521-5639"
              },
              {
              Departamento: "Secretaria Mun. de Planejamento",
              Endereco: "Rua dos Engenheiros, 664 - Bairro Belo Horizonte",
              Nome: "Departamento de Transporte",
              Telefone: "(35) 3522-6417"
              },
              {
              Departamento: "Secretaria Mun. de Planejamento",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 3Âº Andar",
              Nome: "DivisÃ£o de Proc. de Dados",
              Telefone: "(35) 3522-7287"
              },
              {
              Departamento: "Secretaria Mun. de Planejamento",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 2Âº andar",
              Nome: "Grupo TÃ©cnico de AnÃ¡lise - GTA",
              Telefone: "(35) 3522-6442"
              },
              {
              Departamento: "Secretaria Mun. de Planejamento",
              Endereco: "Praca Geraldo da Silva Maia, 175 - 2Âº Andar",
              Nome: "Secretaria Mun. de Planejamento",
              Telefone: "(35) 3522-6442"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua TrÃªs de Maio, 35 - Centro",
              Nome: "AdministraÃ§Ã£o - Secretaria Mun. SaÃºde",
              Telefone: "(35) 3522-4207"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua dos Engenheiros nÂº 664",
              Nome: "Almoxarifado (SaÃºde)",
              Telefone: "(35) 3522-8461"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua SabarÃ¡ 162 - Centro",
              Nome: "AmbulatÃ³rio Escola - UEMG",
              Telefone: "(35) 3522-6293"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Tabajaras, 50 - Nossa Sra Aparecida",
              Nome: "AmbulatÃ³rio SaÃºde Mental",
              Telefone: "(35) 3526-7040"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Turquesa, 1874 - AclimaÃ§Ã£o",
              Nome: "Caps AD",
              Telefone: "(35) 3526-9259"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Atenas, 365 - CalifÃ³rnia",
              Nome: "Caps II",
              Telefone: "(35) 3521-4246"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Atenas, 365 - CalifÃ³rnia",
              Nome: "Caps II ServiÃ§o Social",
              Telefone: "(35) 3526-9524"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "Central de RegulaÃ§Ã£o",
              Telefone: "(35) 3522-7019"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "Central de RegulaÃ§Ã£o",
              Telefone: "(35) 3529-8410"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "Centro de Especialidades OdontolÃ³gicas",
              Telefone: "(35) 3521-2010"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Dr. Breno Soares Maia, 835 - Novo Horizonte",
              Nome: "Cerest",
              Telefone: "(35) 3522-9266"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua TrÃªs de Maio, - Centro",
              Nome: "CoordenaÃ§Ã£o NASF - Unidades de SaÃºde",
              Telefone: "(35) 3522-7032"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "FarmÃ¡cia BÃ¡sica",
              Telefone: "(35) 3522-7008"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Dr. JosÃ© Lemos de Barros, 313",
              Nome: "Hemominas",
              Telefone: "(35) 3522-7129"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Lavras, 319 - Muarama",
              Nome: "NÃºcleo de AssistÃªncia Estomaterapia",
              Telefone: "(35) 3522-4240"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "",
              Nome: "ResidÃªncia TerapÃªutica - Feminino",
              Telefone: "(35) 3526-7731"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "",
              Nome: "ResidÃªncia TerapÃªutica - Masculino",
              Telefone: "(35) 3522-5481"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "192",
              Nome: "SAMU",
              Telefone: ""
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "SÃ£o Lucas - coordenaÃ§Ã£o geral",
              Telefone: "(35) 3522-4032"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "SÃ£o Lucas - Fonaudiologia",
              Telefone: "(35) 3521-2341"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "SÃ£o Lucas - recepÃ§Ã£o",
              Telefone: "(35) 3522-4166"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "SÃ£o Lucas - serviÃ§o social",
              Telefone: "(35) 3526-1240"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "SÃ£o Lucas - Viva Mulher",
              Telefone: "(35) 3522-8897"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua TrÃªs de Maio, 35 - Centro",
              Nome: "Setor de Dieta",
              Telefone: "(35) 3526-8415"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "",
              Nome: "TFD - Tratamento Fora do DomicÃ­lio",
              Telefone: "(35) 3522-7184"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua CanapÃ©, 533",
              Nome: "UBS CasarÃ£o",
              Telefone: "(35) 3522-6409"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Tabajaras, 50",
              Nome: "UBS Nossa Sra Aparecida",
              Telefone: "(35) 3521-4019"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Alfaiates, 220",
              Nome: "UBS Novo Horizonte",
              Telefone: "(35) 3522-8753"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Dona Liquinha da Silveira, 235",
              Nome: "UBS Penha",
              Telefone: "(35) 3522-7151"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua ParÃ¡, s/nÂº",
              Nome: "UBS SÃ£o Domingos",
              Telefone: "(35) 3522-7149"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Brasilia, sem numero",
              Nome: "UBS SÃ£o Francisco",
              Telefone: "(35) 3526-4203"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua BarÃ£o de Passos, 1280",
              Nome: "UPA - AdministraÃ§Ã£o ",
              Telefone: "(35) 3522-3947"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua BarÃ£o de Passos, 1280",
              Nome: "UPA - InternaÃ§Ã£o",
              Telefone: "(35) 3522-7681"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua BarÃ£o de Passos, 1280",
              Nome: "UPA - RecepÃ§Ã£o",
              Telefone: "(35) 3522-3737"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua BarÃ£o de Passos, 1280",
              Nome: "UPA - ServiÃ§o Social",
              Telefone: "(35) 3522-3525"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua BarÃ£o de Passos, 1280",
              Nome: "UPA - SupervisÃ£o de Enfermagem",
              Telefone: "(35) 3522-4214"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "153",
              Nome: "UPA - Unidade de Pronto Atendimento",
              Telefone: ""
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua JoÃ£o Teixeira Mendes, 940",
              Nome: "USF AclimaÃ§Ã£o e USF N. Sra Aparecida",
              Telefone: "(35) 3526-7152"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Morganita, 1688",
              Nome: "USF AclimaÃ§Ã£o II",
              Telefone: "(35) 3526-7175"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Rio de Janeiro, 26 - Bairro SÃ£o Benedito",
              Nome: "USF Bela Vista I",
              Telefone: "(35) 3526-6526"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Mato Grosso, 1725",
              Nome: "USF Bela Vista II",
              Telefone: "(35) 3526-3760"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Santa MÃ´nica, 63",
              Nome: "USF Carmelo",
              Telefone: "(35) 3521-7673"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua SÃ£o Paulo, 1120",
              Nome: "USF CasarÃ£o",
              Telefone: "(35) 3522-7270"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Buenos Aires, s/nÂº ",
              Nome: "USF Coimbras I ",
              Telefone: "(35) 3522-6512"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Coimbras, 1170",
              Nome: "USF Coimbras II e USF Santo AntÃ´nio",
              Telefone: "(35) 3526-5317"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua MercÃºrio, 138",
              Nome: "USF Coimbras III",
              Telefone: "(35) 3522-1473"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Guanabara, 1425",
              Nome: "USF CSU II",
              Telefone: "(35) 3522-7132"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua David Baldini, 106",
              Nome: "USF Escola",
              Telefone: "(35) 3526-1134"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Alferes JoÃ£o Pimenta de Abreu, 45",
              Nome: "USF Nossa Sra das GraÃ§as",
              Telefone: "(35) 3522-9763"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua SÃ£o Gabriel, 105 - Vila Rica",
              Nome: "USF Novo Horizonte",
              Telefone: "(35) 3529-8003"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Leopoldina,",
              Nome: "USF Parque da EstaÃ§Ã£o",
              Telefone: "(35) 3522-7374"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Pitangui, 131",
              Nome: "USF Penha I",
              Telefone: "(35) 3526-4651"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Vereador JosÃ© Cintra de Moraes, 51",
              Nome: "USF Penha II",
              Telefone: "(35) 3521-3146"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Brasilia, s/nÂº",
              Nome: "USF Planalto",
              Telefone: "(35) 3522-8365"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Honduras, s/nÂº",
              Nome: "USF Polivalente",
              Telefone: "(35) 3526-8645"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Rio Doce 679",
              Nome: "USF Santa Luzia",
              Telefone: "(35) 3526-2951"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua SÃ£o Francisco de Assis, 140",
              Nome: "USF SÃ£o Francisco",
              Telefone: "(35) 3522-7130"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Estevam Parenti, 260 - Penha II",
              Nome: "USF Vila Betinho",
              Telefone: "(35) 3521-2268"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Ave Comendador Fco Avelino Maia, 1160",
              Nome: "VigilÃ¢ncia em SaÃºde - Epidemiologia",
              Telefone: "(35) 3522-7177"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua Lavras, 417 - Muarama",
              Nome: "VigilÃ¢ncia SanitÃ¡ria Municipal",
              Telefone: "(35) 3521-1405"
              },
              {
              Departamento: "Secretaria Mun. de Saude ",
              Endereco: "Rua dos Engenheiros, 664 - Belo Horizonte",
              Nome: "Zoonoses",
              Telefone: "(35) 3522-4249"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "Expresso GardÃªnia",
              Telefone: "(35) 3521-6206"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "Expresso UniÃ£o",
              Telefone: "(35) 3521-7887"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "Expresso UniÃ£o Cargas",
              Telefone: "(35) 3521-6744"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "RÃ¡pido Sudoestino",
              Telefone: "(35) 3521-7476"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "ViaÃ§Ã£o Cisne",
              Telefone: "(35) 3529-8600"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "ViaÃ§Ã£o Contijo",
              Telefone: "(35) 3521-6744"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "ViaÃ§Ã£o Martins",
              Telefone: "(35) 3521-7476"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "ViaÃ§Ã£o Mota",
              Telefone: "(35) 3521-6744"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "ViaÃ§Ã£o Santa Cruz",
              Telefone: "(35) 3521-7476"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "ViaÃ§Ã£o Santa Cruz Cargas",
              Telefone: "(35) 3521-7165"
              },
              {
              Departamento: "Terminal Rodoviario ",
              Endereco: "Ave Arlindo Figueiredo, 1001",
              Nome: "ViaÃ§Ã£o SÃ£o Bento",
              Telefone: "(35) 3521-7060"
              }
          
      ]
    return (
        <ScrollView>
        
        {
            list.map((l, i) => (
            <ListItem onPress={()=>{Linking.openURL('tel:'+l.Telefone);}} 
                key={i}
                leftAvatar={{ source: { uri: 'https://cdn.icon-icons.com/icons2/70/PNG/512/phone_14179.png' } }}
                rightTitle={l.Departamento}
                title={l.Nome}
                rightSubtitle={l.Telefone}
                subtitle={l.Endereco}
                bottomDivider
                chevron
                rightSubtitleStyle={{fontSize:12, fontWeight: 'bold'}}
                rightTitleStyle={{fontSize:10}}
            />
            ))
        }
        
        </ScrollView>
        // <View style={padrao.container}>           
        //   {/* <Text style={padrao.titulo}>Telefones</Text> */}
        //   <FlatList
        //   // data={[
        //   //   {key: 'Devin'},
        //   //   {key: 'Dan'},
        //   //   {key: 'Dominic'},
        //   //   {key: 'Jackson'},
        //   //   {key: 'James'},
        //   //   {key: 'Joel'},
        //   //   {key: 'John'},
        //   //   {key: 'Jillian'},
        //   //   {key: 'Jimmy'},
        //   //   {key: 'Julie'},
        //   // ]}
        //   data= {[
        
        //   ]}
            
        // />
          
        // </View>
    )
}

export default Telefones