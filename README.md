# youtube
https://youtu.be/14it9M7yyiA

# Github
https://github.com/appcodedev/tomato-time

# コマンド
```
npx create-expo-app -t expo-template-blank-typescript
```

`expo-cli` のグローバルインストールの非推奨  
代わりにnpxを使う

```
npx expo start
```


# web でのビルドについて注意点
```
expo build:web is not supported in the local CLI, please use npx expo export:web instead
```

1. **`expo publish`の廃止**
   - 以前は、`expo publish` コマンドを使用してプロジェクトの更新をOTA（Over-The-Air）で配布することが一般的でした。
   - このコマンドは、Expoが提供するクラウドサービスに直接接続してアプリの更新を公開していました。

2. **EAS（Expo Application Services）Updateへの移行**
   - Expoは現在、EASという新しいツールセットを提供しています。EASは、より柔軟で高度な機能を提供することを目的としています。
   - `expo publish` の機能は、EAS Updateによって置き換えられています。

3. **ローカルCLIでの`expo publish`非サポート**
   - 新しいCLI（ローカルCLI）では、プロジェクト内にバンドルされた`expo`パッケージを使う設計になっています。この設計では、`expo publish`が利用できず、代わりにEAS Updateを使用する必要があります。

4. **推奨される新しいワークフロー**
   - Expoでは、更新を配信する場合、以下の新しいコマンドを使用することを推奨しています。
     ```bash
     eas update
     ```

---

### 解決方法

1. **EAS CLIのインストール**
   - EAS Updateを使用するために、まずEAS CLIをインストールします。
     ```bash
     npm install -g eas-cli
     ```

2. **EAS CLIでログイン**
   - Expoアカウントにログインします。
     ```bash
     eas login
     ```

3. **EAS Updateの設定**
   - プロジェクトにEAS Updateを設定します。まずは以下のコマンドを実行します。
     ```bash
     eas update:configure
     ```

4. **更新の公開**
   - アプリの更新を配布するには、以下のコマンドを使用します。
     ```bash
     eas update
     ```

---

### 注意点

- **Expoのバージョンと設定確認**
  - プロジェクトのExpo SDKバージョンが最新であることを確認してください。
  - 古いSDKバージョンの場合、EAS Updateがサポートされないことがあります。

- **`eas.json`の設定**
  - `eas.json`ファイルでビルドや更新の設定をカスタマイズする必要がある場合があります。

---

### メッセージの要約

`expo publish`コマンドは、新しいローカルCLIでは使用できません。代わりに、EAS Update (`eas update`) を使用してアプリの更新を配布してください。この変更により、Expoの更新プロセスがより柔軟でスケーラブルになります。