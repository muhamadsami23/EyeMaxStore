import { Hero } from "@/components/hero"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8">
      <Hero title="About Us" image="/placeholder.svg?height=400&width=1600" />

      <div className="mx-auto max-w-4xl space-y-10">
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Innovation Meets Style</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              At Eyemax, we blend cutting-edge technology with stylish design. Our eyewear offers superior protection
              and comfort while making a bold statement. Experience the perfect fusion of innovation and fashion
              tailored for your lifestyle.
            </p>
          </div>
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Eyewear innovation"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </section>

        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Eyewear revolution"
            width={600}
            height={400}
            className="order-2 rounded-lg md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold">Eyewear Revolution</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              At Eyemax, we are committed to revolutionizing eyewear with innovative designs and advanced technology.
              Our mission is to enhance vision while setting new standards in comfort and style.
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Quality Commitment</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              At Eyemax, we prioritize quality in every detail, ensuring our eyewear meets the highest standards of
              durability and performance. Our dedication to excellence guarantees that you receive products designed to
              last and enhance your vision.
            </p>
          </div>
          <img
            src="/craftsmanship-workbench.jpg"
            alt="Quality craftsmanship"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </section>
      </div>
    </div>
  )
}
