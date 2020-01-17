package com.nikolabreznjak;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;
import android.content.Context;
import android.widget.Toast;

public class AndroidToast extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("show".equals(action)) {
            show(args.getString(0), callbackContext);
            return true;
        }else if ("add".equals(action)) {
            add(args.getString(0), callbackContext);
            return true;
        }else if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        }else if (action.equals("coolMethod1")) {
            String message = args.getString(0);
            this.coolMethod1(message, callbackContext);
            return true;
        }

        return false;
    }

    private void show(String msg, CallbackContext callbackContext) {
        if (msg == null || msg.length() == 0) {
            callbackContext.error("Empty message!");
        } else {
            Toast.makeText(webView.getContext(), "SHOW :::::::: " + msg, Toast.LENGTH_LONG).show();
            callbackContext.success(msg);
        }
    }

    private void add(String msg, CallbackContext callbackContext) {
        if (msg == null || msg.length() == 0) {
            callbackContext.error("Empty message!");
        } else {
            Toast.makeText(webView.getContext(), "ADD :::::::: " + msg, Toast.LENGTH_LONG).show();
            callbackContext.success(msg);
        }
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            Toast.makeText(webView.getContext(), "Cool Method :::::::: " + message, Toast.LENGTH_LONG).show();
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

    private void coolMethod1(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            String msg = "Cool Method  1111111 " + message;
            Toast.makeText(webView.getContext(), msg, Toast.LENGTH_LONG).show();
            callbackContext.success(msg);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}