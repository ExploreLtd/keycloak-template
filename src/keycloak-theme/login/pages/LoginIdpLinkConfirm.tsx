import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

export default function LoginIdpLinkConfirm(
  props: PageProps<
    Extract<KcContext, { pageId: "login-idp-link-confirm.ftl" }>,
    I18n
  >
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  });

  const { url, idpAlias } = kcContext;

  const { msg, msgStr } = i18n;

  const idpDisplayName = idpAlias.charAt(0).toUpperCase() + idpAlias.slice(1);

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      headerNode={msg("linkIdpTitle")}
    >
      <div className={getClassName("kcFormGroupClass")}>
        <p className="instruction" style={{ marginBottom: "1rem" }}>
          {msgStr("linkIdpExplanation", idpDisplayName)}
        </p>
        <p className="instruction" style={{ marginBottom: "1.5rem" }}>
          {msgStr("linkIdpQuestion", idpDisplayName)}
        </p>
      </div>
      <form id="kc-register-form" action={url.loginAction} method="post">
        <div className={getClassName("kcFormGroupClass")}>
          <button
            type="submit"
            className={clsx(
              getClassName("kcButtonClass"),
              getClassName("kcButtonPrimaryClass"),
              getClassName("kcButtonBlockClass"),
              getClassName("kcButtonLargeClass")
            )}
            name="submitAction"
            id="linkAccount"
            value="linkAccount"
          >
            {msgStr("linkIdpButton", idpDisplayName)}
          </button>
        </div>
      </form>
    </Template>
  );
}
