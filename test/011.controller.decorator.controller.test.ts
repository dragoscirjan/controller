import 'reflect-metadata'

import {RequestMethod} from '@glasswing/http'
import {ROUTE_REGISTRY_METADATA_NAME, RouteRegistry} from '@glasswing/router'
import {expect} from 'chai'
import {container} from 'tsyringe'

import {Controller} from '../src'

@Controller()
class TestController {
  private a: number = 0

  constructor() {
    this.a++
  }

  public getA(): number {
    return this.a
  }

  public helloWorld(): string {
    return 'Hello World!'
  }
}

const hmd = (key: string, target: any) => Reflect.hasMetadata(key, target)

const gmd = (key: string, target: any) => Reflect.getMetadata(key, target)

describe('lib/controller/decorators => @Controller', () => {
  let controller: any
  before(() => {
    controller = container.resolve(TestController)
  })
  it('Controller::constructor() will return an object', () => {
    expect(controller).to.be.an('object')

    expect(controller.getA()).to.equal(1)
  })

  it('Controller::constructor() routeRegistry metadata to be a RouteRegistry instance', () => {
    expect(gmd(ROUTE_REGISTRY_METADATA_NAME, controller)).to.be.an('object')
    expect(gmd(ROUTE_REGISTRY_METADATA_NAME, controller) instanceof RouteRegistry).to.be.true

    expect(controller.getA()).to.equal(1)
  })

  it('Controller::inject() will return an object', () => {
    const anotherController = container.resolve(TestController)
    expect(anotherController).to.be.an('object')

    expect(controller.getA()).to.equal(1)
  })

  it('Controller::inject() routeRegistry metadata to be a RouteRegistry instance', () => {
    const anotherController = container.resolve(TestController)
    expect(gmd(ROUTE_REGISTRY_METADATA_NAME, anotherController)).to.be.an('object')
    expect(gmd(ROUTE_REGISTRY_METADATA_NAME, anotherController) instanceof RouteRegistry).to.be.true

    expect(controller.getA()).to.equal(1)
  })
})
