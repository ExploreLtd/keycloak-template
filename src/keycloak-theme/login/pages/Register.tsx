// ejected using 'npx eject-keycloak-page'
import { useMemo } from "react";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

export default function Register(
  props: PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n>
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  });

  const {
    url,
    messagesPerField,
    register,
    realm,
    passwordRequired,
    recaptchaRequired,
    recaptchaSiteKey,
  } = kcContext;

  const { msg, msgStr } = i18n;

  const { emailPrefill, firstNamePrefill, lastNamePrefill, usernamePrefill } =
    useMemo(() => {
      if (typeof window === "undefined") {
        return {
          emailPrefill: undefined,
          firstNamePrefill: undefined,
          lastNamePrefill: undefined,
          usernamePrefill: undefined,
        };
      }

      const params = new URLSearchParams(window.location.search);

      const emailPrefill =
        params.get("loginHint") ?? params.get("login_hint") ?? undefined;
      const firstNamePrefill = params.get("firstName") ?? undefined;
      const lastNamePrefill = params.get("lastName") ?? undefined;
      const usernamePrefill = params.get("username") ?? undefined;

      return {
        emailPrefill,
        firstNamePrefill,
        lastNamePrefill,
        usernamePrefill,
      };
    }, []);

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      headerNode={msg("registerTitle")}
    >
      <form
        id="kc-register-form"
        className={getClassName("kcFormClass")}
        action={url.registrationAction}
        method="post"
      >
        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            messagesPerField.printIfExists(
              "firstName",
              getClassName("kcFormGroupErrorClass")
            )
          )}
        >
          <div className={getClassName("kcLabelWrapperClass")}>
            <label htmlFor="firstName" className={getClassName("kcLabelClass")}>
              {msg("firstName")}
            </label>
          </div>
          <div className={getClassName("kcInputWrapperClass")}>
            <input
              type="text"
              id="firstName"
              className={getClassName("kcInputClass")}
              name="firstName"
              defaultValue={
                register.formData.firstName ?? firstNamePrefill ?? ""
              }
            />
          </div>
        </div>

        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            messagesPerField.printIfExists(
              "lastName",
              getClassName("kcFormGroupErrorClass")
            )
          )}
        >
          <div className={getClassName("kcLabelWrapperClass")}>
            <label htmlFor="lastName" className={getClassName("kcLabelClass")}>
              {msg("lastName")}
            </label>
          </div>
          <div className={getClassName("kcInputWrapperClass")}>
            <input
              type="text"
              id="lastName"
              className={getClassName("kcInputClass")}
              name="lastName"
              defaultValue={register.formData.lastName ?? lastNamePrefill ?? ""}
            />
          </div>
        </div>

        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            messagesPerField.printIfExists(
              "email",
              getClassName("kcFormGroupErrorClass")
            )
          )}
        >
          <div className={getClassName("kcLabelWrapperClass")}>
            <label htmlFor="email" className={getClassName("kcLabelClass")}>
              {msg("email")}
            </label>
          </div>
          <div className={getClassName("kcInputWrapperClass")}>
            <input
              type="text"
              id="email"
              className={getClassName("kcInputClass")}
              name="email"
              defaultValue={register.formData.email ?? emailPrefill ?? ""}
              autoComplete="email"
            />
          </div>
        </div>
        {!realm.registrationEmailAsUsername && (
          <div
            className={clsx(
              getClassName("kcFormGroupClass"),
              messagesPerField.printIfExists(
                "username",
                getClassName("kcFormGroupErrorClass")
              )
            )}
          >
            <div className={getClassName("kcLabelWrapperClass")}>
              <label
                htmlFor="username"
                className={getClassName("kcLabelClass")}
              >
                {msg("username")}
              </label>
            </div>
            <div className={getClassName("kcInputWrapperClass")}>
              <input
                type="text"
                id="username"
                className={getClassName("kcInputClass")}
                name="username"
                defaultValue={
                  register.formData.username ?? usernamePrefill ?? ""
                }
                autoComplete="username"
              />
            </div>
          </div>
        )}
        {passwordRequired && (
          <>
            <div
              className={clsx(
                getClassName("kcFormGroupClass"),
                messagesPerField.printIfExists(
                  "password",
                  getClassName("kcFormGroupErrorClass")
                )
              )}
            >
              <div className={getClassName("kcLabelWrapperClass")}>
                <label
                  htmlFor="password"
                  className={getClassName("kcLabelClass")}
                >
                  {msg("password")}
                </label>
              </div>
              <div className={getClassName("kcInputWrapperClass")}>
                <input
                  type="password"
                  id="password"
                  className={getClassName("kcInputClass")}
                  name="password"
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div
              className={clsx(
                getClassName("kcFormGroupClass"),
                messagesPerField.printIfExists(
                  "password-confirm",
                  getClassName("kcFormGroupErrorClass")
                )
              )}
            >
              <div className={getClassName("kcLabelWrapperClass")}>
                <label
                  htmlFor="password-confirm"
                  className={getClassName("kcLabelClass")}
                >
                  {msg("passwordConfirm")}
                </label>
              </div>
              <div className={getClassName("kcInputWrapperClass")}>
                <input
                  type="password"
                  id="password-confirm"
                  className={getClassName("kcInputClass")}
                  name="password-confirm"
                />
              </div>
            </div>
          </>
        )}
        {recaptchaRequired && (
          <div className="form-group">
            <div className={getClassName("kcInputWrapperClass")}>
              <div
                className="g-recaptcha"
                data-size="compact"
                data-sitekey={recaptchaSiteKey}
              ></div>
            </div>
          </div>
        )}
        <div className={getClassName("kcFormGroupClass")}>
          <div
            id="kc-form-options"
            className={getClassName("kcFormOptionsClass")}
          >
            <div className={getClassName("kcFormOptionsWrapperClass")}>
              <span>
                <a href={url.loginUrl}>{msg("backToLogin")}</a>
              </span>
            </div>
          </div>

          <div
            id="kc-form-buttons"
            className={getClassName("kcFormButtonsClass")}
          >
            <input
              className={clsx(
                getClassName("kcButtonClass"),
                getClassName("kcButtonPrimaryClass"),
                getClassName("kcButtonBlockClass"),
                getClassName("kcButtonLargeClass")
              )}
              type="submit"
              value={msgStr("doRegister")}
            />
          </div>
        </div>
      </form>
    </Template>
  );
}
