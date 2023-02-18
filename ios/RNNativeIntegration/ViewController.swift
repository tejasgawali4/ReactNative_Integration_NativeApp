//
//  ViewController.swift
//  RNNativeIntegration
//
//  Created by Tejas Gawali on 09/12/22.
//

import UIKit
import React
import Foundation

class ViewController: UIViewController {
    let msg: String = "Tejas Gawali"
    
    @IBAction func NavigateToRNPage(_ sender: Any) {
        let rootView = RNViewManager.sharedInstance.viewForModule(
            "RNNativeIntegration",
            initialProperties: ["message_from_native": msg])
        
        let reactNativeVC = UIViewController()
        reactNativeVC.view = rootView
        reactNativeVC.modalPresentationStyle = .fullScreen
        present(reactNativeVC, animated: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    
    func hideKeyboardWhenTappedAround() {
        let tap = UITapGestureRecognizer(target: self.view, action: #selector(UIView.endEditing))
        tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
    }

}

