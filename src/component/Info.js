import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

// スタイル
const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      margin: 10,
    },
    textLeft: {
      textAlign: 'left',
    },
    paragraph: {
      marginTop: 10,
      marginBottom: 10,
    },
  });
  
  
  class Info extends React.Component {
  
    render() {
  
      // Material-ui関連
      const { classes } = this.props;
  
      return (
        <div>
          <h2></h2>
          <div className={classes.textLeft}>
          
            <Paper className={classes.root} elevation={1}>
              <Typography variant="headline" component="h3">
                BandSNSについて
              </Typography>
              <Typography component="p">
                バンド好きのためにできた情報を一覧表示、またユーザー間での情報共有を目的としたアプリ。各ライブ情報・ライブ会場情報・グッズ情報などユーザー間での情報交換を行える場として準備しました。
              </Typography>
            </Paper>
            
            <Paper className={classes.root} elevation={1}>
              <Typography variant="headline" component="h3">
                構成要素
              </Typography>
              <Typography component="p" className={classes.paragraph}>
                本アプリでは下記技術を用いており、各サービスの仕様変更ならびに障害発生時には、本アプリの提供・公開を中断する場合もございます。予めご了承下さい。
              </Typography>
              <Typography component="div" className={classes.paragraph}>
                <ul>
                  <li>Firebase Hosting</li>
                  <li>React・Material-UI</li>
                </ul>
              </Typography>
            </Paper>
            
            <Paper className={classes.root} elevation={1}>
              <Typography variant="headline" component="h3">
                本アプリの目的
              </Typography>
              <Typography component="p" className={classes.paragraph}>
                主にユーザー間でのライブ、アーティストの情報交換の場を目的としています。メジャーデビューまたインディーズのライブ情報を各SNSで探し回らずに済むように作成しました。
              </Typography>
              <Typography component="p" className={classes.paragraph}>
                古参の方々は新規参入のお客を毛嫌いされるようにおもわれますが、実は古参の皆さんは新規の方々に色々教えることが好きだと思います。（ご指摘・質問など大歓迎）
              </Typography>
            </Paper>

            <Paper className={classes.root} elevation={1}>
              <Typography variant="headline" component="h3">
                自己紹介
              </Typography>
              <Typography component="p" className={classes.paragraph}>
                インディーズ、メジャー問わず日本の邦ロックを愛しています。
              </Typography>
              <Typography component="p" className={classes.paragraph}>
                好きなジャンルはメロコアやスカ、パンクなどです。全般的に愛しています。以前まで年間100回程ですがライブハウスに通っていましたが、そこで特にインディーズのライブ情報や物販の情報を入手するためにSNSにて探すことが面倒だと感じていました。
              </Typography>
              <Typography component="p" className={classes.paragraph}>
                そこでユーザー間での某SNSのようにユーザー間での情報交換をメインとし、またターゲットを絞り込み、バンド好きな方々とライブに初めて参戦される新規の方々の情報交換の場として活用していただけるように作ってみました。
              </Typography>
            </Paper>

          </div>
        </div>
      );
    }
  }
  
  // Material-ui関連
  Info.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  
  // Material-uiのテーマ設定
  export default withStyles(styles, { withTheme: true })(Info);