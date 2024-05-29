/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OvkmBpbNoVe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Img from "../Imagenes/imgcatalogo.png"
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:leading-tighter xl:text-[3.4rem] 2xl:text-[3.75rem]">
                 Caracter científica
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                ¡Bienvenido a la documentación para desarrolladores de Springer Nature API! Como editorial científica,
                 técnica y médica líder a nivel mundial, Springer Nature se compromete a apoyar a la comunidad de investigación brindando acceso 
                 a un amplio repositorio de contenido a través de nuestras innovadoras API.
                </p>
              </div>
              <img
                alt="About"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src={Img}
                width="500"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Misión</h2>
                <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Springer Nature se destaca como una destacada editorial científica mundial, reconocida por sus distinguidos libros, revistas y su compromiso inquebrantable con la difusión de contenido de alta calidad a través de productos y servicios de información pioneros. Con operaciones en unos 20 países y respaldada por una sólida fuerza laboral de más de 13 000 empleados, Springer Nature no solo publica cerca de 500 revistas académicas y de sociedades profesionales, sino que también ilumina el sector de ciencia, tecnología y medicina (STM) con la publicación de alrededor de 3000 revistas. y 13.000 libros nuevos al año. Además, cuenta con la colección de libros electrónicos STM más grande del mundo.
                </p>

              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conocimientos</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">
                      API Springer Metadata : desbloquea metadatos para más de 13 millones de documentos en línea,
                       que incluyen artículos de revistas, capítulos de libros y protocolos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">
                      Springer Meta API : una versión más avanzada que ofrece metadatos versionados para la misma base de contenido amplia.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                    <div>
                     
                      <p className="text-gray-500 dark:text-gray-400">
                      API Springer Open Access : otorga acceso a metadatos y, cuando esté disponible, 
                      contenido de texto completo para más de 649,000 artículos de acceso abierto, 
                      seleccionando contenido de las revistas BioMed Central y SpringerOpen.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of experts is dedicated to delivering exceptional results for our clients.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <img
                  alt="Sofia Davis"
                  className="mx-auto h-20 w-20 rounded-full"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sofia is the visionary behind our company, leading the team with her passion for innovation and
                  customer success.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <img
                  alt="Jackson Lee"
                  className="mx-auto h-20 w-20 rounded-full"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jackson is our technical mastermind, driving innovation and ensuring the quality of our solutions.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <img
                  alt="Olivia Nguyen"
                  className="mx-auto h-20 w-20 rounded-full"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Olivia is the driving force behind our operational excellence, ensuring that we deliver exceptional
                  results for our clients.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <img
                  alt="Liam Hernandez"
                  className="mx-auto h-20 w-20 rounded-full"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Liam is our sales leader, building strong relationships with our clients and ensuring that we deliver
                  the best solutions for their needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}