package com.margelo.nitro.simplelib

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.TurboReactPackage
import com.facebook.react.uimanager.ViewManager

import com.margelo.nitro.simplelib.views.HybridTest2ViewManager
class NitroSimpleLibPackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? = null

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider = ReactModuleInfoProvider { HashMap() }

    companion object {
        init {
            NitroSimpleLibOnLoad.initializeNative()
        }
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<in Nothing, in Nothing>> {
        val viewManagers = ArrayList<ViewManager<*, *>>()
        viewManagers.add(HybridTest2ViewManager())
        return viewManagers
    }
}
