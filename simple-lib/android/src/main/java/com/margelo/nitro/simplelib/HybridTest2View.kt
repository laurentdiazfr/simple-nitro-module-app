package com.margelo.nitro.simplelib
import android.view.View
import com.facebook.react.uimanager.ThemedReactContext

class HybridTest2View(val context: ThemedReactContext): HybridTest2ViewSpec(){
    // Props
    override var enableFlash: Boolean = false

    // View
    override val view: View = View(context)
}

