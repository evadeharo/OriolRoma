import Grid from "./Grid"
import HTMLText from "./HTMLText"
import Container from "./Container"
import Appear from "./Appear"

type Props = {
  title: string
  textRow1: Array<string>
  textRow2: Array<string>
  textRow3: Array<string>
  textRow4: Array<string>
  day1: string
  day2: string
  day3: string
  day4: string
}

const DesignersComponent: React.FC<Props> = ({
  title,
  textRow1,
  textRow2,
  textRow3,
  textRow4,
  day1,
  day2,
  day3,
  day4,
}: Props): React.ReactElement => {
  return (
    <Container paddingVertical="pt-0 pb-24 md:pb-12 xl:pb-24 bs:pb-32">
      <Grid>
        <div className="col-start-1 col-span-4 md:col-span-5 leading-tight font-medium mb-6 md:mb-12">
          <Appear>
            <h4 className="text-40">{title}</h4>
          </Appear>
        </div>

        <div className="col-span-2 md:col-span-3 col-start-1 md:col-start-1 flex flex-col">
          <Appear>
            <h6 className="text-20 font-bold">{day1}</h6>
          </Appear>
          {textRow1.map((item, index) => {
            return (
              <div key={index} className="text-14">
                <Appear>
                  <HTMLText text={item} />
                </Appear>
              </div>
            )
          })}
        </div>
        <div className="col-span-2 col-start-3 md:col-span-3 md:col-start-4 flex flex-col">
          <Appear>
            <h6 className="text-20 font-bold">{day2}</h6>
          </Appear>
          {textRow2.map((item, index) => {
            return (
              <div key={index} className="text-14">
                <Appear>
                  <HTMLText text={item} />
                </Appear>
              </div>
            )
          })}
        </div>
        <div className="col-span-2 col-start-1 md:col-span-3 md:col-start-7 flex flex-col">
          <Appear>
            <h6 className="text-20 font-bold">{day3}</h6>
          </Appear>

          {textRow3.map((item, index) => {
            return (
              <div key={index} className="text-14">
                <Appear>
                  <HTMLText text={item} />
                </Appear>
              </div>
            )
          })}
        </div>
        <div className="col-span-2 col-start-3 md:col-span-3 md:col-start-10 flex flex-col">
          <Appear>
            <h6 className="text-20 font-bold">{day4}</h6>
          </Appear>
          {textRow4.map((item, index) => {
            return (
              <div key={index} className="text-14">
                <Appear>
                  <HTMLText text={item} />
                </Appear>
              </div>
            )
          })}
        </div>
      </Grid>
    </Container>
  )
}

export default DesignersComponent
