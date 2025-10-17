//
//  HybridTest2View.swift
//  Pods
//
//  Created by laurent diaz on 17/10/2025.
//
import Foundation

class HybridTest2View: HybridTest2ViewSpec {
    var enableFlash: Bool = false
    
    var view: UIView = {
        let fullScreenView = UIView(frame: UIScreen.main.bounds)
        fullScreenView.backgroundColor = .black
        return fullScreenView
    }()
    
}
