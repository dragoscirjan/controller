import 'reflect-metadata'
import {Singleton} from '@glasswing/common'
import {RequestMethod} from '@glasswing/http'
import {ROUTE_REGISTRY_METADATA_NAME, RouteRegistry} from '@glasswing/router'
import {expect} from 'chai'
import {container} from 'tsyringe'

import {AbstractController} from '../src'

@Singleton()
class TestController extends AbstractController {
  public helloWorld(): string {
    return 'Hello World!'
  }
}

const hmd = (key: string, target: any) => Reflect.hasMetadata(key, target)

const gmd = (key: string, target: any) => Reflect.getMetadata(key, target)

describe('lib/controller => AbstractController', () => {
  let controller: any
  before(() => {
    controller = container.resolve(TestController)
  })
  it('Controller::constructor() will return an object', () => {
    expect(controller).to.be.an('object')
  })

  it('Controller::constructor() routeRegistry metadata to be a RouteRegistry instance', () => {
    expect(gmd(ROUTE_REGISTRY_METADATA_NAME, controller)).to.be.an('object')
    expect(gmd(ROUTE_REGISTRY_METADATA_NAME, controller) instanceof RouteRegistry).to.be.true
  })

  it('Controller::inject() will return an object', () => {
    const anotherController = container.resolve(TestController)
    expect(anotherController).to.be.an('object')
  })

  it('Controller::inject() routeRegistry metadata to be a RouteRegistry instance', () => {
    const anotherController = container.resolve(TestController)
    expect(hmd(ROUTE_REGISTRY_METADATA_NAME, anotherController)).to.be.true
    expect(gmd(ROUTE_REGISTRY_METADATA_NAME, anotherController)).to.be.an('object')
    expect(gmd(ROUTE_REGISTRY_METADATA_NAME, anotherController) instanceof RouteRegistry).to.be.true
  })
})
