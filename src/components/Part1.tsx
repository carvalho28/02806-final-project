'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import Script from 'next/script'
// import DenmarkUrbanGreen from '@/images/denmarkGreenUrban.jpg'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            facilis nisi aliquam amet illum inventore sunt, possimus sed
            laboriosam asperiores ut quaerat rerum rem tenetur aut, animi cumque
            nihil! Enim!
          </p>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            The air we breathe
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we navigate through the landscape of Denmark&apos;s environmental
            policies, our initial focus is on the air that Danes breathe every
            day. The cornerstone of our analysis is the PM10 data, a critical
            indicator of air quality. PM10 particles, with a diameter of less
            than 10 micrometers, are fine enough to bypass the body&apos;s
            defenses, penetrating deep into the lungs and potentially causing a
            range of health problems.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            The data for our exploration comes from a monitoring station in
            Risø, noted for having the highest levels of pollution across
            Denmark. This particular station provides a stark baseline from
            which to measure the impact of national efforts to improve air
            quality.
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
            Our ten-year review reveals a narrative of resilience and progress.
            Despite the inherent ebbs and flows in the PM10 data, a clear trend
            emerges: a significant and sustained reduction in particle
            concentration. This downward trajectory is not just a number on a
            chart; it represents a breath of fresh air for all Danes, reducing
            health risks and enhancing quality of life.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            This improvement in air quality is a testament to Denmark&apos;s
            rigorous environmental policies and its commitment to sustainable
            practices. Each step toward cleaner air is also a step toward
            reducing the broader environmental impact, including greenhouse gas
            emissions.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we transition from particulate pollution to greenhouse gases,
            it&apos;s crucial to recognize how interconnected these issues are.
            The strategies that help scrub the air of particulates also
            contribute to Denmark&apos;s efforts in curbing CO2 emissions. As we
            continue our exploration, we&apos;ll see how these efforts
            complement each other, painting a comprehensive picture of
            Denmark&apos;s environmental strategy.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Cooling the climate
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Another pivotal aspect of Denmark&apos;s environmental strategy is
            its management of greenhouse gas emissions, which serves as a
            critical barometer of sustainability. Over the past 10 years,
            Denmark has shown a commendable decrease in these emissions, as
            illustrated in our next visualization.
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
            Greenhouse gases, which include not only carbon dioxide but also
            methane, water vapor, and others, trap infrared radiation from the
            Earth&apos;s surface, contributing to the greenhouse effect. These
            emissions originate from a variety of sources, encompassing
            everything from agricultural practices to industrial processes. The
            graph we present excludes CO<sub>2</sub> emissions from biomass,
            focusing instead on those emissions most directly linked to human
            activities.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            The data reveals a consistent decline in overall greenhouse gas
            emissions, reflecting Denmark&apos;s serious commitment to
            addressing this global challenge. This success story is particularly
            evident in the reduction of methane emissions, which are
            significantly influenced by three main sectors: farming and
            agriculture, fossil fuels, and waste management. Each sector has
            seen targeted interventions aimed at reducing its carbon footprint.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Turning our attention to CO<sub>2</sub>, over 90% of these emissions
            in Denmark stem from the combustion of fossil fuels. This direct
            link underscores the importance of transitioning away from fossil
            fuels to alternative energy sources, a strategy that Denmark has
            been aggressively pursuing. This shift not only contributes to the
            decrease in CO<sub>2</sub> emissions but also supports the broader
            decline in greenhouse gases.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            To further understand the impact of these changes, our next step
            will be to examine Denmark&apos;s consumption of fossil fuels over
            the same period. This analysis will help us connect the dots between
            reduced fossil fuel usage and the trends observed in greenhouse gas
            emissions, providing a clearer picture of the strategies Denmark has
            employed to achieve these environmental gains.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Fueling the future
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we delve deeper into Denmark&apos;s transformative energy
            landscape, we uncover striking evidence of its commitment to
            sustainability. Over the past two decades, Denmark has dramatically
            reshaped its energy framework, substantially reducing its dependence
            on fossil fuels. This significant change is captured vividly in our
            next visualization.
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
            This comparative graph not only shows the fossil fuel share halving
            as a percentage of Denmark&apos;s primary energy sources but also
            aligns this trend with the country&apos;s total energy consumption.
            Impressively, even as Denmark&apos;s reliance on fossil fuels
            diminishes, we also observe a marked decrease in overall energy
            usage. This points to successful efficiency improvements in sectors
            like housing and manufacturing, where modern technologies have led
            to less energy consumption without sacrificing productivity or
            comfort.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Furthermore, these trends offer insights into the declining
            greenhouse gas emissions we discussed earlier. The strong link
            between reduced fossil fuel usage and lower emissions is undeniable,
            and while it&apos;s not the sole factor, it&apos;s clear that this
            shift has played a crucial role in Denmark&apos;s environmental
            progress.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we transition from the tale of fossil fuels to the broader canvas
            of energy sources, it&apos;s essential to explore how both renewable
            and non-renewable energies are integrated into Denmark&apos;s power
            grid. Next, we will delve into the comprehensive mix of energy
            sources fueling Denmark today, continuing our journey through
            Denmark&apos;s green transformation.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Powering the nation
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we delve deeper into Denmark&apos;s journey towards a sustainable
            future, our focus shifts to how the country has transformed its
            energy mix to meet the daily needs of its citizens and economy. This
            evolution is crucial not just for reducing environmental impact but
            also for ensuring a stable, sustainable energy supply for future
            generations.
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
            consumption patterns in Denmark. Notably, the overall energy
            consumption has declined, reflecting improvements in efficiency
            across various sectors. Fossil fuels, once the backbone of energy
            consumption, have seen a significant reduction—oil consumption
            dropped by around 50 TWh, coal by 25 TWh, and gas by 35 TWh.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            In contrast, renewable energy sources have surged, now forming a
            substantial part of Denmark&apos;s energy portfolio. Wind energy, in
            particular, has become a cornerstone, comprising almost 40% of the
            total energy consumed. This dramatic shift not only highlights
            Denmark&apos;s leadership in wind energy but also underscores a
            broader commitment to renewable resources.
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
            While oil production has only seen a modest reduction of 8%, coal
            production has significantly decreased, now contributing only about
            6% to the total energy production, down from 20% a decade ago. This
            decline in coal usage is a critical step forward in Denmark&apos;s
            environmental strategy.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Despite the challenges associated with storing renewable energy, due
            to the high costs and inefficiencies of current battery
            technologies, the rise in renewable production marks progress.
            Denmark&apos;s energy transformation, though complex, is a testament
            to its pioneering spirit and commitment to sustainability.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            We can only hope that Denmark continues on this path, further
            reducing reliance on non-renewable sources and enhancing the
            efficiency of renewable energy storage. This journey illustrates not
            only the challenges of such a monumental shift but also the
            potential for significant environmental and economic benefits as
            Denmark powers into the future.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we have seen, Denmark&apos;s commitment to transforming its
            energy sources is not just a tale of environmental stewardship but
            also a strategic economic move. Next, we will explore how these
            energy policies are intertwined with Denmark&apos;s economic
            performance, revealing the financial implications and benefits of a
            sustainable energy strategy.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Energizing the economy
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            In our exploration of Denmark&apos;s environmental and energy
            strategies, it&apos;s crucial to address another key aspect: the
            economic impact. Amidst widespread skepticism about the economic
            feasibility of green policies, where concerns often center on the
            potential for job losses and hindered growth, Denmark&apos;s
            experience offers a compelling counter-narrative.
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
            Our analysis begins by examining Denmark&apos;s Gross Domestic
            Product (GDP) over the past two decades—a period marked by
            significant strides towards sustainability. The data reveals a
            consistent upward trend in GDP. This steady growth, while not
            dramatically sharp, is significant and aligns with Denmark&apos;s
            intensified efforts toward renewable energy adoption and
            environmental stewardship.
          </p>
        </div>
        {/*  GDP per capita vs. renewable energy utilization, 2000-2022 */}
        <div
          className="flourish-embed flourish-chart border-2 border-red-200"
          data-src="visualisation/17680141"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            To deepen our understanding, we compare GDP growth with the rise in
            renewable energy utilization. This comparison illustrates a clear
            correlation between economic health and green policies. Far from
            being a mere coincidence, this relationship underscores a successful
            strategy where economic activities increasingly leverage clean
            energy.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Contrary to fears that environmental initiatives could dampen
            economic vitality, Denmark&apos;s example suggests that sustainable
            practices can coincide with, or even propel, economic prosperity.
            The integration of GDP growth with robust renewable energy usage
            challenges the myth that sustainability necessitates economic
            sacrifice. Instead, it reveals that Denmark&apos;s proactive
            environmental agenda has not only helped preserve its natural beauty
            but also bolstered its economic resilience and competitiveness on a
            global scale.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we move forward, Denmark&apos;s journey offers insightful lessons
            on harmonizing environmental sustainability with economic growth. To
            fully appreciate the scale and context of Denmark&apos;s
            achievements, it&apos;s essential to place them within a broader
            international framework. We will next explore how Denmark&apos;s
            performance compares with that of other European countries and
            globally, delving into where Denmark stands in its green transition
            relative to its peers.
          </p>
        </div>
      </Container>
    </section>
  )
}
