
export type BookData = {
  id: number
  title: string
  pages: number
  rate: number
  author: string
  publisher: string
  category: string
  image: string
  description: string
  price: number
}

export const bookData: BookData[] = [
  {
    id: 1,
    title: 'David Copperfield',
    pages: 872,
    rate: 9.6,
    author: 'Charles Dickens',
    publisher: 'Zahar',
    category: 'Ficção',
    image: '/books/david-copperfield.jpg',
    description: 'Um dos maiores romances da literatura mundial, David Copperfield tem entre seus leitores gerações sucessivas de escritores do porte de James Joyce, Kakfa, Virginia Woolf e Tolstói, para quem é fonte de inspiração permanente. A lista inclui também o próprio Charles Dickens, que considerava o livro “seu filho favorito”. Publicada como folhetim entre 1849 e 1850, a história é um clássico relato de formação de um menino descobrindo um mundo que é, ao mesmo tempo, mágico, assustador e terrivelmente real. Dickens constrói esse universo de forma brilhante, emprestando a ele partes substanciais de sua própria biografia, mas usando como amálgama a sua inventividade incomparável como ficcionista e as tintas mais acuradas do realismo inglês do século XIX. \nAssim, seguimos a vida de David, desde a sua infância pobre e difícil até a descoberta da vocação de escritor, numa jornada repleta de aventuras cômicas, sentimentais e por vezes trágicas.',
    price: 84.99,
  },
  {
    id: 2,
    title: 'Aventuras de Huckleberry Finn',
    pages: 408,
    rate: 8.5,
    author: 'Mark Twain',
    publisher: 'Zahar',
    category: 'Ficção',
    image: '/books/aventuras-de-huckleberry-finn.jpg',
    description: 'A obra-prima de Mark Twain e uma das joias da ficção mundial de todos os tempos. Huckleberry Finn – o parceiro de Tom Sawyer – escapa de casa para embarcar em uma série de aventuras junto com o escravo fugitivo Jim. A bordo de uma jangada, os dois sobem o Mississippi e vivem situações extraordinárias com personagens inesquecíveis – como o “Rei” e o “Duque”, uma das maiores duplas de vigaristas da história da literatura.',
    price: 73.25,
  },
  {
    id: 3,
    title: 'Memórias do Subsolo',
    pages: 152,
    rate: 9.6,
    author: 'Fiódor Dostoiévski',
    publisher: 'Editora 34',
    category: 'Ficção',
    image: '/books/memorias-do-subsolo.jpg',
    description: 'Obra-prima da literatura mundial, esta pequena novela traz, em embrião, vários temas da fase madura de Dostoiévski. Seu protagonista, um funcionário que vive no subsolo de um edifício em São Petersburgo, expõe a sua visão de mundo num discurso explosivo, labiríntico, vertido impecavelmente para o português por Boris Schnaiderman. "Tradução primorosa." (Luciano Trigo, O Globo)',
    price: 37.59,
  },
  {
    id: 4,
    title: 'O Hobbit',
    pages: 336,
    rate: 9.5,
    author: 'J.R.R. Tolkien',
    publisher: 'HarperCollins',
    category: 'Fantasia',
    image: '/books/o-hobbit.jpg',
    description: 'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.',
    price: 41.94,
  },
  {
    id: 5,
    title: 'Matéria Escura',
    pages: 352,
    rate: 9.7,
    author: 'Blake Crouch',
    publisher: 'Intrínseca',
    category: 'Ficção-científica',
    image: '/books/materia-escura.jpg',
    description: 'Com ritmo veloz e muita ação, Matéria escura nos leva a um universo muito maior do que imaginamos, ao mesmo tempo em que comove ao colocar em primeiro plano o amor pela família. Marcante e intimista, seus múltiplos cenários compõem uma história que aborda questões profundamente humanas, como identidade, o peso das escolhas e até onde vamos para recuperar a vida com que sonhamos.',
    price: 199.90,
  },
  {
    id: 6,
    title: '1984',
    pages: 416,
    rate: 9.2,
    author: 'George Orwell',
    publisher: 'Companhia das Letras',
    category: 'Ficção',
    image: '/books/1984.jpg',
    description: 'Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário.',
    price: 20.99,
  },
  {
    id: 7,
    title: 'Uma breve história do tempo',
    pages: 256,
    rate: 9.0,
    author: 'Stephen Hawking',
    publisher: 'Intrínseca',
    category: 'Não-Ficção',
    image: '/books/uma-breve-historia-do-tempo.jpg',
    description: 'Uma das mentes mais geniais do mundo moderno, Stephen Hawking guia o leitor na busca por respostas a algumas das maiores dúvidas da humanidade: Qual a origem do universo? Ele é infinito? E o tempo? Sempre existiu, ou houve um começo e haverá um fim? Existem outras dimensões além das três espaciais? E o que vai acontecer quando tudo terminar?',
    price: 49.90,
  },
  {
    id: 8,
    title: 'Tempos líquidos',
    pages: 120,
    rate: 8.9,
    author: 'Zygmunt Bauman',
    publisher: 'Zahar',
    category: 'Filosofia',
    image: '/books/tempos-liquidos.jpg',
    description: 'Em Tempos líquidos, Zygmunt Bauman faz uma reflexão profunda sobre a insegurança, sobretudo nas grandes cidades. A insegurança é a marca fundamental dos tempos líquido-modernos. Terrorismo, crime organizado, desemprego e solidão: todos esses são fenômenos típicos de uma era na qual a exclusão e a desintegração da solidariedade expõem o homem aos seus temores mais graves.',
    price: 26.99,
  },
]
