import * as IronMan from '@mrvl/m-iron-man'
import * as IronMan2 from '@mrvl/m-iron-man-2'
import * as CaptainAmerica from '@mrvl/m-captain-america-the-first-avenger'
import * as Avengers from '@mrvl/m-the-avengers'
import * as Hulk from '@mrvl/m-the-incredible-hulk'
import * as Thor from '@mrvl/m-thor'

const movies = [IronMan, Hulk, IronMan2, Thor, CaptainAmerica, Avengers]

export const routes = movies.map(({getRoutes}) => getRoutes()).flat()
export const cards = movies.map(({Card}) => Card)
