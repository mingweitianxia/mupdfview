package com.example.demosdk;


import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Region.Op;
import android.os.Bundle;
import android.view.View;

import com.dooland.common.base.DoolandMagSdk;
import com.dooland.common.util.OpenTargetActivityUtils;
import com.dooland.doolandbasesdk.MainFragmentActivity;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		DoolandMagSdk.init(this);
		
	}
	/**
	 * 
	 * @param context
	 * @param magId 期刊id
	 * @param title 期刊标题
	 * @param path 路劲
	 * @param url 期刊封面缩略图 地址
	 */
	private void readMag(Context context, String magId, String title, String path, String url){
		//
		OpenTargetActivityUtils.openReaderPdfActivity(context, magId, title, path, url);
	}
	public void onClick(View v){
		Intent intent = new Intent(this, MainFragmentActivity.class);
		switch (v.getId()) {
		case R.id.at_main_enter_btn:
			intent.putExtra("hasLogined", false);
			break;

		case R.id.at_main_login_enter_btn:
			intent.putExtra("hasLogined", true);
			break;
		}
		startActivity(intent);
	}
	@Override
	protected void onDestroy() {
		super.onDestroy();
		DoolandMagSdk.destroy();
	}
}
