'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import Script from 'next/script'
import DenmarkUrbanGreen from '@/images/greenTransformation.jpg'

export function Part1() {
  return (
    <section
      id="part1"
      className="sm:py-15 flex items-center justify-center scroll-smooth py-10"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="part1-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Understanding Denmark
          </h2>
          <div className="relative mt-10 h-96">
            <Image
              src={DenmarkUrbanGreen}
              alt="Urban greenery in Denmark"
              layout="fill"
              objectFit="cover"
            />
            {/* caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <p className="text-sm">
                <i>Denmark&apos;s urban greenery</i>. Made by{' '}
                <a
                  href="https://dribbble.com/gulzadesenturk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Gülzade Şentürk
                </a>{' '}
                on{' '}
                <a
                  href="https://dribbble.com/shots/10511720-Green-Transformation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Dribbble
                </a>
              </p>
            </div>
          </div>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Our journey through Denmark&apos;s environmental progress examines
            key data: air quality improvements, reductions in greenhouse gases,
            and shifts in energy consumption from fossil fuels to renewables.
            Each point tells a story of policy success and the ongoing
            commitment to a sustainable future.
          </p>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            The air we breathe
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we navigate through the landscape of Denmark&apos;s environmental
            policies, our initial focus is on the air that Danes breathe every
            day. The foundation of our analysis is the <b>PM10 data</b>, a
            critical indicator of air quality. PM10 particles, with a diameter
            of less than 10 micrometers, are fine enough to bypass the
            body&apos;s defenses, penetrating deep into the lungs and
            potentially causing a range of health problems.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            The data for our exploration originates from a monitoring station in
            Risø, which was noted for having the highest levels of air pollution
            across Denmark at the time of data collection. This particular
            station provides a stark baseline from which to measure the impact
            of national efforts to improve air quality.
          </p>
        </div>

        {/*  PM 10 concentration in Denmark*/}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17834675"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>

        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            The data speaks clearly. Despite the inherent ebbs and flows in the
            PM10 curve, a clear trend emerges:{' '}
            <b>
              a significant and sustained reduction in particle concentration
            </b>
            . This downward trajectory is not just a number on a chart; it
            represents a breath of fresh air for all Danes, reducing health
            risks and enhancing quality of life.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            This improvement in air quality is a testament to Denmark&apos;s
            rigorous environmental policies and its commitment to sustainable
            practices. Each step toward cleaner air also contributes to the
            reduction of greenhouse gas emissions, a key metric in today&apos;s
            climate crisis.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we transition from particulate pollution to greenhouse gases,
            it&apos;s crucial to recognize how interconnected these issues are.
            The strategies that help scrub the air of particulates also
            contribute to Denmark&apos;s efforts in curbing these harmful
            emissions. As we continue our exploration, we&apos;ll see how
            interconnected and influential these efforts are.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Cooling the climate
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Another fundamental aspect of Denmark&apos;s environmental strategy
            is its management of <b>greenhouse gas emissions</b>, which serves
            as a critical barometer of sustainability.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Greenhouse gases, which include not only carbon dioxide but also
            methane, water vapor, and others, trap infrared radiation from the
            Earth&apos;s surface, contributing to the greenhouse effect. These
            emissions originate from a variety of sources, encompassing
            everything from agricultural practices to industrial processes. The
            graph we present excludes CO<sub>2</sub> emissions from biomass,
            focusing instead on those{' '}
            <b>emissions most directly linked to human activities</b>.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Over the past 10 years, Denmark has shown a commendable decrease in
            these emissions, as illustrated in our next visualization.
          </p>
        </div>
        {/*  Greenhouse emissions */}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17505530"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            The data reveals a consistent decline in overall greenhouse gas
            emissions. In particular, we notice how Denmark has been able to
            curb by about <b>20,000 tonnes</b> in emissions. This success story
            is particularly evident in the reduction of emissions, which are
            significantly influenced by three main sectors: farming and
            agriculture, fossil fuels, and waste management. Each sector has
            seen targeted interventions aimed at reducing its carbon footprint.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Turning our attention to{' '}
            <b>
              CO<sub>2</sub>
            </b>
            , one of the most relevant greenhouse gases,{' '}
            <b>
              over 90% of these emissions stem from the combustion of fossil
              fuels
            </b>
            . This direct link underscores the importance of transitioning away
            from fossil fuels to alternative energy sources, a strategy that
            Denmark has been aggressively pursuing.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            To further understand the impact of these changes, our next step
            will be to examine Denmark&apos;s consumption of fossil fuels over a
            similar period of time. This analysis will help us connect the dots
            between reduced fossil fuel usage and the trends observed in
            greenhouse gas emissions.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Fueling the future
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Over the past two decades, Denmark has dramatically reshaped its
            energy framework, substantially{' '}
            <b>reducing its dependence on fossil fuels</b>. This significant
            change is captured vividly in our next visualization.
          </p>
        </div>
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17827873"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            This comparative graph clearly shows how Denmark{' '}
            <b>has almost halved fossil fuel share over the past 20 years</b>.
            Impressively, even as Denmark&apos;s reliance on fossil fuels
            diminishes, we also observe a marked decrease in overall energy
            usage <b>shrinking by around 40 TWh</b>. This means that fossil fuel
            combustion has decreased even in absolute terms, as evidenced not
            only by its reduced share, but also by the overall decline in
            primary energy consumption. This points to successful efficiency
            improvements in sectors like housing and manufacturing, where modern
            technologies have led to less energy consumption without sacrificing
            productivity or comfort.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Furthermore, these trends offer insights into the declining
            greenhouse gas emissions we discussed earlier. The{' '}
            <b>
              strong link between reduced fossil fuel usage and lower emissions
            </b>{' '}
            is undeniable, and while it&apos;s not the sole factor, it&apos;s
            clear that this shift has played a crucial role in Denmark&apos;s
            environmental progress.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we transition from the tale of fossil fuels to the broader canvas
            of energy sources, it&apos;s essential to explore how both renewable
            and non-renewable energies are integrated into Denmark&apos;s power
            grid. Next, we will delve into the comprehensive mix of energy
            sources fueling Denmark today.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Powering the nation
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Our focus shifts to how the country has transformed its energy mix
            to meet the daily needs of its citizens and economy. This evolution
            is crucial not just for reducing environmental impact but also for{' '}
            <b>
              ensuring a stable, sustainable energy supply for future
              generations
            </b>
            .
          </p>
        </div>
        {/* Energy consumption */}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17507459"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            This interactive graph clearly delineates the shift in energy
            consumption patterns in Denmark. As we had previously observed, the
            overall energy consumption has declined, reflecting improvements in
            efficiency across various sectors. Fossil fuels, once the backbone
            of energy consumption, have seen a significant reduction—oil
            consumption{' '}
            <b>dropped by around 50 TWh, coal by 25 TWh, and gas by 35 TWh</b>.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            In contrast, renewable energy sources have surged, now forming a
            substantial part of Denmark&apos;s energy portfolio. Wind energy, in
            particular, has become essential,{' '}
            <b>comprising almost 40% of the total energy consumed</b>.
          </p>
        </div>
        {/* Energy production */}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17805259"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            When examining energy production, the narrative slightly shifts.
            While <b>oil production</b> has only seen a modest{' '}
            <b>reduction of 8%</b>, <b>coal production</b> has significantly
            decreased, <b>now contributing only about 6%</b> to the total energy
            production, down from 20% a decade ago.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Despite the challenges associated with storing renewable energy, due
            to the high costs and inefficiencies of current battery
            technologies, the rise in renewable production marks progress in
            Denmark&apos;s energy transformation.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            We can only hope that Denmark continues on this path, further
            reducing reliance on non-renewable sources and enhancing the
            efficiency of renewable energy storage.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Next, we will explore how these energy policies are intertwined with
            Denmark&apos;s economic performance, revealing the financial
            implications and benefits of a sustainable energy strategy.
          </p>

          {/* Section on economy */}

          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Energizing the economy
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Understanding the performance of the Danish economy is crucial for
            assessing the <b>real impacts of sustainable policies</b>. This
            analysis helps dispel the myths that these policies necessarily lead
            to economic downturns. Many arguments against climate-sensitive
            policies revolve around concerns regarding the economy. Some fear
            that shifting towards sustainable policies involves high costs,
            potential job losses, and could cause an economic decline. However,
            as we embark on our fact-checking journey, we aim to challenge and
            disprove these notions.
          </p>
        </div>
        {/* Denmark GDP: */}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17505568"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Here, we&apos;ve plotted the real percentage growth of
            Denmark&apos;s GDP against previous periods. Despite some
            fluctuations, a clear trend emerges over the last two decades—
            <b>consistent economic growth</b>. This growth period coincides with
            Denmark&apos;s increased investment in renewable energy, suggesting
            these two are positively correlated. We further explore this
            connection in the next visualization.
          </p>
        </div>
        {/*  GDP per capita vs. renewable energy utilization, 2000-2022 */}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17680141"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            <b>This correlation is more than a mere coincidence</b>. It paints a
            powerful narrative of sustainable development and economic growth.
            Despite initial concerns that investing in renewable energy might
            hinder economic prosperity, Denmark&apos;s experience disproves this
            belief. As Denmark has ramped up renewable energy utilization, not
            only has <b>GDP per capita soared</b>, but sectors like clean tech
            and green manufacturing have thrived, clearly debunking the myth
            that environmental care undermines economic vitality.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            To fully appreciate the scale and context of Denmark&apos;s
            achievements, it&apos;s essential to place them within a broader
            international framework. We will next explore how Denmark&apos;s
            performance compares with that of other European countries and
            globally.
          </p>
        </div>
      </Container>
    </section>
  )
}
