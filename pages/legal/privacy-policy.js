import Footer from '../../components/footer'
import ShutterHead from '../../components/head'
import Menu from '../../components/menu'

export default function Guides() {
  return (
    <div>
      <ShutterHead />
      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <TermsAndConditions />
        </div>
      </div>
      <Footer />
    </div>
  )
}

function Bdt(props) {
  return <span>{props.children}</span>
}

function TermsAndConditions() {
  return (
<>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  [data-custom-class='body'], [data-custom-class='body'] * {\n          background: transparent !important;\n        }\n[data-custom-class='title'], [data-custom-class='title'] * {\n          font-family: Arial !important;\nfont-size: 26px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {\n          font-family: Arial !important;\ncolor: #595959 !important;\nfont-size: 14px !important;\n        }\n[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {\n          font-family: Arial !important;\nfont-size: 19px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {\n          font-family: Arial !important;\nfont-size: 17px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='body_text'], [data-custom-class='body_text'] * {\n          color: #595959 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\n        }\n[data-custom-class='link'], [data-custom-class='link'] * {\n          color: #3030F1 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\nword-break: break-word !important;\n        }\n"
    }}
  />
  <div className="prose mx-auto mt-12">
    <div>
      <strong>
        <span style={{ fontSize: 26 }}>
          <span data-custom-class="title">PRIVACY NOTICE</span>
        </span>
      </strong>
    </div>
    <div>
      <span style={{ color: "rgb(127, 127, 127)" }}>
        <strong>
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="subtitle">
              Last updated <Bdt className="question">May 15, 2022</Bdt>
            </span>
          </span>
        </strong>
      </span>
    </div>
    <div>
      <br />
    </div>
    <div style={{ lineHeight: "1.5" }}>
      <span style={{ color: "rgb(127, 127, 127)" }}>
        <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
          <span data-custom-class="body_text">
            This privacy notice for{" "}
            <Bdt className="question">Reilabs sp. z o.o.</Bdt>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <Bdt className="block-component" />
              </span>
            </span>{" "}
            (<Bdt className="block-component" />"
            <Bdt className="block-component" />
            <strong>Company</strong>
            <Bdt className="statement-end-if-in-editor" />
            ," "<strong>we</strong>," "<strong>us</strong>," or "
            <strong>our</strong>"<Bdt className="statement-end-if-in-editor" />
          </span>
          <span data-custom-class="body_text">
            ), describes how and why we might collect, store, use, and/or share
            (<Bdt className="block-component" />"<strong>process</strong>"
            <Bdt className="statement-end-if-in-editor" />) your information
            when you use our services (<Bdt className="block-component" />"
            <strong>Services</strong>"
            <Bdt className="statement-end-if-in-editor" />
            ), such as when you:
          </span>
        </span>
      </span>
      <span style={{ fontSize: 15 }}>
        <span style={{ color: "rgb(127, 127, 127)" }}>
          <span data-custom-class="body_text">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <Bdt className="block-component" />
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
    <ul>
      <li style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              Visit our website
              <Bdt className="block-component" /> at{" "}
              <Bdt className="question">
                <a
                  href="https://hexavatar.com"
                  
                  data-custom-class="link"
                >
                  https://hexavatar.com
                </a>
              </Bdt>
              <span style={{ fontSize: 15 }}>
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <Bdt className="statement-end-if-in-editor">
                          , or any website of ours that links to this privacy
                          notice
                        </Bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </li>
    </ul>
    <div>
      <Bdt className="block-component">
        <span style={{ fontSize: 15 }}>
          <span style={{ fontSize: 15 }}>
            <span style={{ color: "rgb(127, 127, 127)" }}>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    <Bdt className="block-component" />
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </Bdt>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span data-custom-class="body_text">
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <Bdt className="block-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <ul>
        <li style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                Engage with us in other related ways, including any sales,
                marketing, or events
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <Bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span data-custom-class="body_text">
              <strong>Questions or concerns?&nbsp;</strong>Reading this privacy
              notice will help you understand your privacy rights and choices.
              If you do not agree with our policies and practices, please do not
              use our Services. If you still have any questions or concerns,
              please contact us at{" "}
              <Bdt className="question">help@hexavatar.com</Bdt>.
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <strong>
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="heading_1">SUMMARY OF KEY POINTS</span>
          </span>
        </strong>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>
              <em>
                This summary provides key points from our privacy notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our table
                of contents below to find the section you are looking for. You
                can also click&nbsp;
              </em>
            </strong>
          </span>
        </span>
        <a data-custom-class="link" href="#toc">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">
              <strong>
                <em>here</em>
              </strong>
            </span>
          </span>
        </a>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>
              <em>&nbsp;to go directly to our table of contents.</em>
            </strong>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>What personal information do we process?</strong> When you
            visit, use, or navigate our Services, we may process personal
            information depending on how you interact with{" "}
            <Bdt className="block-component" />
            <Bdt className="question">Reilabs sp. z o.o.</Bdt>
            <Bdt className="statement-end-if-in-editor" /> and the Services, the
            choices you make, and the products and features you use. Click&nbsp;
          </span>
        </span>
        <a data-custom-class="link" href="#personalinfo">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">here</span>
          </span>
        </a>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">&nbsp;to learn more.</span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>Do we process any sensitive personal information?</strong>{" "}
            <Bdt className="block-component" />
            We do not process sensitive personal information.
            <Bdt className="else-block" />
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>Do we receive any information from third parties?</strong>{" "}
            <Bdt className="block-component" />
            We do not receive any information from third parties.
            <Bdt className="else-block" />
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>How do we process your information?</strong> We process your
            information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other
            purposes with your consent. We process your information only when we
            have a valid legal reason to do so. Click&nbsp;
          </span>
        </span>
        <a data-custom-class="link" href="#infouse">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">here</span>
          </span>
        </a>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">&nbsp;to learn more.</span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>
              In what situations and with which{" "}
              <Bdt className="block-component" />
              types of <Bdt className="statement-end-if-in-editor" />
              parties do we share personal information?
            </strong>{" "}
            We may share information in specific situations and with specific{" "}
            <Bdt className="block-component" />
            categories of <Bdt className="statement-end-if-in-editor" />
            third parties. Click&nbsp;
          </span>
        </span>
        <a data-custom-class="link" href="#whoshare">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">here</span>
          </span>
        </a>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            &nbsp;to learn more.
            <Bdt className="block-component" />
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>How do we keep your information safe?</strong> We have{" "}
            <Bdt className="block-component" />
            organizational
            <Bdt className="statement-end-if-in-editor" /> and technical
            processes and procedures in place to protect your personal
            information. However, no electronic transmission over the internet
            or information storage technology can be guaranteed to be 100%
            secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other <Bdt className="block-component" />
            unauthorized
            <Bdt className="statement-end-if-in-editor" /> third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Click&nbsp;
          </span>
        </span>
        <a data-custom-class="link" href="#infosafe">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">here</span>
          </span>
        </a>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            &nbsp;to learn more.
            <Bdt className="statement-end-if-in-editor" />
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>What are your rights?</strong> Depending on where you are
            located geographically, the applicable privacy law may mean you have
            certain rights regarding your personal information. Click&nbsp;
          </span>
        </span>
        <a data-custom-class="link" href="#privacyrights">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">here</span>
          </span>
        </a>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">&nbsp;to learn more.</span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>How do I exercise my rights?</strong> The easiest way to
            exercise your rights is by filling out our data subject request form
            available <Bdt className="block-component" />
          </span>
        </span>
        <a
          data-custom-class="link"
          href="https://app.termly.io/notify/457f5ea0-1a75-4725-a1da-da3fcf83303e"
          rel="noopener noreferrer"
          
        >
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">here</span>
          </span>
        </a>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <Bdt className="block-component" />, or by contacting us. We will
            consider and act upon any request in accordance with applicable data
            protection laws.
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            Want to learn more about what <Bdt className="block-component" />
            <Bdt className="question">Reilabs sp. z o.o.</Bdt>
            <Bdt className="statement-end-if-in-editor" /> does with any
            information we collect? Click&nbsp;
          </span>
        </span>
        <a data-custom-class="link" href="#toc">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">here</span>
          </span>
        </a>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            &nbsp;to review the notice in full.
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div id="toc" style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <strong>
                <span data-custom-class="heading_1">TABLE OF CONTENTS</span>
              </strong>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#infocollect">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              1. WHAT INFORMATION DO WE COLLECT?
            </span>
          </a>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#infouse">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              2. HOW DO WE PROCESS YOUR INFORMATION?
              <Bdt className="block-component" />
            </span>
          </a>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#legalbases">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              3.{" "}
              <span style={{ fontSize: 15 }}>
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                  INFORMATION?
                </span>
              </span>
              <Bdt className="statement-end-if-in-editor" />
            </span>
          </a>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            <a data-custom-class="link" href="#whoshare">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </a>
          </span>
          <span data-custom-class="body_text">
            <Bdt className="block-component" />
          </span>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <Bdt className="block-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#cookies">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </span>
          </a>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <Bdt className="statement-end-if-in-editor" />
                </span>
              </span>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <Bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#sociallogins">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </span>
              </span>
            </span>
          </a>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <Bdt className="statement-end-if-in-editor" />
                    </span>
                  </span>
                  <Bdt className="block-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#intltransfers">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </span>
          </a>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <Bdt className="statement-end-if-in-editor" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#inforetain">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              8. HOW LONG DO WE KEEP YOUR INFORMATION?
            </span>
          </a>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <Bdt className="block-component" />
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#infosafe">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              9. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </span>
          </a>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <Bdt className="statement-end-if-in-editor" />
                  <Bdt className="block-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span style={{ color: "rgb(89, 89, 89)" }}>
            <a data-custom-class="link" href="#privacyrights">
              10. WHAT ARE YOUR PRIVACY RIGHTS?
            </a>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#DNT">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              11. CONTROLS FOR DO-NOT-TRACK FEATURES
            </span>
          </a>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#caresidents">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </span>
          </a>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <a data-custom-class="link" href="#policyupdates">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              13. DO WE MAKE UPDATES TO THIS NOTICE?
            </span>
          </a>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <a data-custom-class="link" href="#contact">
          <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
            14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </span>
        </a>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <a data-custom-class="link" href="#request">
          <span style={{ color: "rgb(89, 89, 89)" }}>
            15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </span>
        </a>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div id="infocollect" style={{ lineHeight: "1.5" }}>
        <span style={{ color: "rgb(127, 127, 127)" }}>
          <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                  <strong>
                    <span data-custom-class="heading_1">
                      1. WHAT INFORMATION DO WE COLLECT?
                    </span>
                  </strong>
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div id="personalinfo" style={{ lineHeight: "1.5" }}>
        <span data-custom-class="heading_2" style={{ color: "rgb(0, 0, 0)" }}>
          <span style={{ fontSize: 15 }}>
            <strong>Personal information you disclose to us</strong>
          </span>
        </span>
      </div>
      <div>
        <div>
          <br />
        </div>
        <div style={{ lineHeight: "1.5" }}>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        <em>In Short:</em>
                      </strong>
                    </span>
                  </span>
                </span>
              </span>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        <em>&nbsp;</em>
                      </strong>
                      <em>
                        We collect personal information that you provide to us.
                      </em>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              We collect personal information that you voluntarily provide to us
              when you{" "}
              <span style={{ fontSize: 15 }}>
                <Bdt className="block-component" />
              </span>
              register on the Services,&nbsp;
            </span>
            <span style={{ fontSize: 15 }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15 }}>
                  <Bdt className="statement-end-if-in-editor" />
                </span>
              </span>
              <span data-custom-class="body_text">
                express an interest in obtaining information about us or our
                products and Services, when you participate in activities on the
                Services, or otherwise when you contact us.
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <Bdt className="block-component" />
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <strong>Personal Information Provided by You.</strong> The
              personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <Bdt className="forloop-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <ul>
        <li style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <Bdt className="question">email addresses</Bdt>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <Bdt className="forloop-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <ul>
        <li style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <Bdt className="question">names</Bdt>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <Bdt className="forloop-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <ul>
        <li style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <Bdt className="question">usernames</Bdt>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <Bdt className="forloop-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <ul>
        <li style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <Bdt className="question">passwords</Bdt>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <Bdt className="forloop-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <ul>
        <li style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <Bdt className="question">contact preferences</Bdt>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <Bdt className="forloop-component" />
                </span>
                <span data-custom-class="body_text">
                  <Bdt className="statement-end-if-in-editor" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div id="sensitiveinfo" style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <strong>Sensitive Information.</strong>{" "}
            <Bdt className="block-component" />
            We do not process sensitive information.
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15 }}>
          <span data-custom-class="body_text">
            <Bdt className="else-block" />
          </span>
        </span>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <Bdt className="block-component" />
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <strong>Payment Data.</strong> We may collect data necessary to
              process your payment if you make purchases, such as your payment
              instrument number (such as a credit card number), and the security
              code associated with your payment instrument. All payment data is
              stored by
              <Bdt className="forloop-component" />
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    <span style={{ fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <Bdt className="block-component" />
                      </span>
                    </span>
                  </span>
                </span>
              </span>{" "}
              <Bdt className="question">Stripe, Inc.</Bdt>
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                              <Bdt className="block-component" />
                            </span>
                          </span>
                        </span>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: "rgb(89, 89, 89)" }}>
                              <span data-custom-class="body_text">
                                <span style={{ fontSize: 15 }}>
                                  <span style={{ color: "rgb(89, 89, 89)" }}>
                                    <span data-custom-class="body_text">
                                      <span
                                        style={{ color: "rgb(89, 89, 89)" }}
                                      >
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <Bdt className="forloop-component" />
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    . You may find their privacy notice link(s) here:
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                        <span data-custom-class="body_text">
                          <Bdt className="forloop-component" />
                          <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                          >
                            <span
                              style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                            >
                              <span data-custom-class="body_text">
                                <span style={{ fontSize: 15 }}>
                                  <span data-custom-class="body_text">
                                    <Bdt className="block-component" />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>{" "}
                    <Bdt className="question">
                      <a
                        href="https://stripe.com/privacy"
                        
                        data-custom-class="link"
                      >
                        https://stripe.com/privacy
                      </a>
                    </Bdt>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                        <span data-custom-class="body_text">
                          <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                          >
                            <span
                              style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                            >
                              <span data-custom-class="body_text">
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)"
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: "rgb(89, 89, 89)"
                                    }}
                                  >
                                    <span data-custom-class="body_text">
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                          <Bdt className="block-component" />
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <Bdt className="forloop-component" />
                          <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <Bdt className="statement-end-if-in-editor">
                    <Bdt className="block-component" />
                  </Bdt>
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <strong>Social Media Login Data.&nbsp;</strong>We may provide you
              with the option to register with us using your existing social
              media account details, like your Facebook, Twitter, or other
              social media account. If you choose to register in this way, we
              will collect the information described in the section called{" "}
              <Bdt className="block-component" />"
              <Bdt className="statement-end-if-in-editor" />
              <span style={{ fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <span style={{ fontSize: 15 }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <a data-custom-class="link" href="#sociallogins">
                        HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                      </a>
                    </span>
                  </span>
                </span>
              </span>
              <Bdt className="block-component" />"
              <Bdt className="statement-end-if-in-editor" /> below.
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <Bdt className="statement-end-if-in-editor">
                  <Bdt className="statement-end-if-in-editor" />
                </Bdt>
              </span>
            </span>
          </span>
        </span>
        <Bdt className="block-component" />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <Bdt className="block-component" />
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span data-custom-class="heading_2" style={{ color: "rgb(0, 0, 0)" }}>
          <span style={{ fontSize: 15 }}>
            <strong>Information automatically collected</strong>
          </span>
        </span>
      </div>
      <div>
        <div>
          <br />
        </div>
        <div style={{ lineHeight: "1.5" }}>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        <em>In Short:</em>
                      </strong>
                    </span>
                  </span>
                </span>
              </span>
              <span data-custom-class="body_text">
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        <em>&nbsp;</em>
                      </strong>
                      <em>
                        Some information — such as your Internet Protocol (IP)
                        address and/or browser and device characteristics — is
                        collected automatically when you visit our Services.
                      </em>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <Bdt className="block-component" />
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              Like many businesses, we also collect information through cookies
              and similar technologies. <Bdt className="block-component" />
              You can find out more about this in our Cookie Notice:{" "}
              <Bdt className="statement-end-if-in-editor" />
              <Bdt className="block-component" />
              <Bdt className="question">
                <a
                  href="https://hexavatar.com/legal/cookies"
                  
                  data-custom-class="link"
                >
                  https://hexavatar.com/legal/cookies
                </a>
              </Bdt>
              .<Bdt className="block-component" />
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <br />
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <Bdt className="statement-end-if-in-editor">
                <span data-custom-class="body_text" />
              </Bdt>
            </span>
          </span>
        </span>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              <Bdt className="block-component" />
            </span>
          </span>
        </span>
      </div>
      <div style={{ lineHeight: "1.5" }}>
        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text">
              The information we collect includes:
              <Bdt className="block-component" />
            </span>
          </span>
        </span>
      </div>
      <ul>
        <li style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <em>Log and Usage Data.</em> Log and usage data is
                service-related, diagnostic, usage, and performance information
                our servers automatically collect when you access or use our
                Services and which we record in log files. Depending on how you
                interact with us, this log data may include your IP address,
                device information, browser type, and settings and information
                about your activity in the Services
                <span style={{ fontSize: 15 }}>&nbsp;</span>(such as the
                date/time stamps associated with your usage, pages and files
                viewed, searches, and other actions you take such as which
                features you use), device event information (such as system
                activity, error reports (sometimes called{" "}
                <Bdt className="block-component" />
                "crash dumps"
                <Bdt className="statement-end-if-in-editor" />
                ), and hardware settings).
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <Bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{ lineHeight: "1.5" }}>
        <Bdt className="block-component">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text" />
          </span>
        </Bdt>
      </div>
      <ul>
        <li style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <em>Device Data.</em> We collect device data such as information
                about your computer, phone, tablet, or other device you use to
                access the Services. Depending on the device used, this device
                data may include information such as your IP address (or proxy
                server), device and application identification numbers,
                location, browser type, hardware model, Internet service
                provider and/or mobile carrier, operating system, and system
                configuration information.
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <Bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </li>
      </ul>
      <div style={{ lineHeight: "1.5" }}>
        <Bdt className="block-component">
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text" />
          </span>
        </Bdt>
        <div>
          <Bdt className="block-component">
            <span style={{ fontSize: 15 }} />
          </Bdt>
          <Bdt className="statement-end-if-in-editor" />
          <span data-custom-class="body_text">
            <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
              <span data-custom-class="body_text">
                <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <Bdt className="statement-end-if-in-editor">
                      <Bdt className="block-component" />
                    </Bdt>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span style={{ fontSize: 15 }}>
            <span data-custom-class="body_text">
              <Bdt className="block-component" />
            </span>
          </span>
        </div>
        <div id="infouse" style={{ lineHeight: "1.5" }}>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                    <strong>
                      <span data-custom-class="heading_1">
                        2. HOW DO WE PROCESS YOUR INFORMATION?
                      </span>
                    </strong>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </div>
        <div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <span style={{ color: "rgb(127, 127, 127)" }}>
              <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                <span data-custom-class="body_text">
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <strong>
                          <em>In Short:&nbsp;</em>
                        </strong>
                        <em>
                          We process your information to provide, improve, and
                          administer our Services, communicate with you, for
                          security and fraud prevention, and to comply with law.
                          We may also process your information for other
                          purposes with your consent.
                        </em>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
        <div style={{ lineHeight: "1.5" }}>
          <br />
        </div>
        <div style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <strong>
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </strong>
                <Bdt className="block-component" />
              </span>
            </span>
          </span>
        </div>
        <ul>
          <li style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <strong>
                    To facilitate account creation and authentication and
                    otherwise manage user accounts.&nbsp;
                  </strong>
                  We may process your information so you can create and log in
                  to your account, as well as keep your account in working
                  order.
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15 }}>
                          <span style={{ color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <span style={{ fontSize: 15 }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                  <span data-custom-class="body_text">
                                    <Bdt className="statement-end-if-in-editor" />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </li>
        </ul>
        <div style={{ lineHeight: "1.5" }}>
          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <Bdt className="block-component" />
              </span>
            </span>
          </span>
          <div style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <Bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    <strong>
                      To deliver and facilitate delivery of services to the
                      user.&nbsp;
                    </strong>
                    We may process your information to provide you with the
                    requested service.
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span data-custom-class="body_text">
                          <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                          >
                            <span
                              style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                            >
                              <span data-custom-class="body_text">
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)"
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: "rgb(89, 89, 89)"
                                    }}
                                  >
                                    <span data-custom-class="body_text">
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: "rgb(89, 89, 89)"
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: "rgb(89, 89, 89)"
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span
                                                      style={{
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <Bdt className="statement-end-if-in-editor" />
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span data-custom-class="body_text">
                  <Bdt className="block-component" />
                </span>
              </span>
            </span>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">
                    <Bdt className="block-component" />
                  </span>
                </span>
              </span>
            </div>
            <ul>
              <li style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        To respond to user inquiries/offer support to
                        users.&nbsp;
                      </strong>
                      We may process your information to respond to your
                      inquiries and solve any potential issues you might have
                      with the requested service.
                      <Bdt className="statement-end-if-in-editor" />
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div style={{ lineHeight: "1.5" }}>
              <Bdt className="block-component">
                <span style={{ fontSize: 15 }} />
              </Bdt>
              <div style={{ lineHeight: "1.5" }}>
                <Bdt className="block-component">
                  <span style={{ fontSize: 15 }} />
                </Bdt>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <strong>
                          To send administrative information to you.&nbsp;
                        </strong>
                        We may process your information to send you details
                        about our products and services, changes to our terms
                        and policies, and other similar information.
                        <span
                          style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                          <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                          >
                            <span data-custom-class="body_text">
                              <span
                                style={{
                                  fontSize: 15,
                                  color: "rgb(89, 89, 89)"
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)"
                                  }}
                                >
                                  <span data-custom-class="body_text">
                                    <Bdt className="statement-end-if-in-editor" />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <Bdt className="block-component">
                  <span style={{ fontSize: 15 }} />
                </Bdt>
                <div style={{ lineHeight: "1.5" }}>
                  <Bdt className="block-component">
                    <span style={{ fontSize: 15 }}>
                      <span data-custom-class="body_text" />
                    </span>
                  </Bdt>
                </div>
                <ul>
                  <li style={{ lineHeight: "1.5" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <strong>
                          To <Bdt className="block-component" />
                          fulfill
                          <Bdt className="statement-end-if-in-editor" /> and
                          manage your orders.
                        </strong>{" "}
                        We may process your information to{" "}
                        <Bdt className="block-component" />
                        fulfill
                        <Bdt className="statement-end-if-in-editor" /> and
                        manage your orders, payments, returns, and exchanges
                        made through the Services.
                      </span>
                    </span>
                    <Bdt className="statement-end-if-in-editor">
                      <span style={{ fontSize: 15 }}>
                        <span data-custom-class="body_text" />
                      </span>
                    </Bdt>
                  </li>
                </ul>
                <p style={{ fontSize: 15, lineHeight: "1.5" }}>
                  <Bdt className="block-component">
                    <span style={{ fontSize: 15 }} />
                  </Bdt>
                </p>
                <p style={{ fontSize: 15, lineHeight: "1.5" }}>
                  <Bdt className="block-component">
                    <span style={{ fontSize: 15 }} />
                  </Bdt>
                </p>
                <p style={{ fontSize: 15, lineHeight: "1.5" }}>
                  <Bdt className="block-component" />
                </p>
                <p style={{ fontSize: 15, lineHeight: "1.5" }}>
                  <Bdt className="block-component" />
                </p>
                <ul>
                  <li style={{ lineHeight: "1.5" }}>
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span data-custom-class="body_text">
                            <strong>To request feedback.&nbsp;</strong>We may
                            process your information when necessary to request
                            feedback and to contact you about your use of our
                            Services.
                            <span style={{ color: "rgb(89, 89, 89)" }}>
                              <span style={{ color: "rgb(89, 89, 89)" }}>
                                <span data-custom-class="body_text">
                                  <span style={{ color: "rgb(89, 89, 89)" }}>
                                    <span data-custom-class="body_text">
                                      <span
                                        style={{ color: "rgb(89, 89, 89)" }}
                                      >
                                        <span data-custom-class="body_text">
                                          <Bdt className="statement-end-if-in-editor" />
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
                <div style={{ lineHeight: "1.5" }}>
                  <Bdt className="block-component">
                    <span style={{ fontSize: 15 }} />
                  </Bdt>
                  <div style={{ lineHeight: "1.5" }}>
                    <Bdt className="block-component">
                      <span style={{ fontSize: 15 }} />
                    </Bdt>
                  </div>
                  <ul>
                    <li style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                        <span
                          style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                          <span data-custom-class="body_text">
                            <strong>
                              To send you marketing and promotional
                              communications.&nbsp;
                            </strong>
                            We may process the personal information you send to
                            us for our marketing purposes, if this is in
                            accordance with your marketing preferences. You can
                            opt out of our marketing emails at any time. For
                            more information, see{" "}
                            <Bdt className="block-component" />"
                            <Bdt className="statement-end-if-in-editor" />
                          </span>
                        </span>
                      </span>
                      <a data-custom-class="link" href="#privacyrights">
                        <span
                          style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                          <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                          >
                            <span data-custom-class="body_text">
                              WHAT ARE YOUR PRIVACY RIGHTS?
                            </span>
                          </span>
                        </span>
                      </a>
                      <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                        <span
                          style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                          <span data-custom-class="body_text">
                            <Bdt className="block-component" />"
                            <Bdt className="statement-end-if-in-editor" />{" "}
                            below).
                          </span>
                          <span data-custom-class="body_text">
                            <Bdt className="statement-end-if-in-editor" />
                          </span>
                        </span>
                      </span>
                    </li>
                  </ul>
                  <div style={{ lineHeight: "1.5" }}>
                    <Bdt className="block-component">
                      <span style={{ fontSize: 15 }} />
                    </Bdt>
                    <div style={{ lineHeight: "1.5" }}>
                      <span style={{ fontSize: 15 }}>
                        <Bdt className="block-component">
                          <span data-custom-class="body_text" />
                        </Bdt>
                      </span>
                      <div style={{ lineHeight: "1.5" }}>
                        <Bdt className="block-component">
                          <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text" />
                          </span>
                        </Bdt>
                        <div style={{ lineHeight: "1.5" }}>
                          <Bdt className="block-component">
                            <span style={{ fontSize: 15 }}>
                              <span data-custom-class="body_text" />
                            </span>
                          </Bdt>
                          <div style={{ lineHeight: "1.5" }}>
                            <Bdt className="block-component">
                              <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text" />
                              </span>
                            </Bdt>
                          </div>
                          <ul>
                            <li style={{ lineHeight: "1.5" }}>
                              <span data-custom-class="body_text">
                                <span style={{ fontSize: 15 }}>
                                  <strong>To protect our Services.</strong> We
                                  may process your information as part of our
                                  efforts to keep our Services safe and secure,
                                  including fraud monitoring and prevention.
                                </span>
                              </span>
                              <Bdt className="statement-end-if-in-editor">
                                <span style={{ fontSize: 15 }}>
                                  <span data-custom-class="body_text" />
                                </span>
                              </Bdt>
                            </li>
                          </ul>
                          <div style={{ lineHeight: "1.5" }}>
                            <Bdt className="block-component">
                              <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text" />
                              </span>
                            </Bdt>
                            <div style={{ lineHeight: "1.5" }}>
                              <Bdt className="block-component">
                                <span style={{ fontSize: 15 }}>
                                  <span data-custom-class="body_text" />
                                </span>
                              </Bdt>
                              <div style={{ lineHeight: "1.5" }}>
                                <Bdt className="block-component">
                                  <span style={{ fontSize: 15 }}>
                                    <span data-custom-class="body_text" />
                                  </span>
                                </Bdt>
                                <div style={{ lineHeight: "1.5" }}>
                                  <Bdt className="block-component">
                                    <span style={{ fontSize: 15 }}>
                                      <span data-custom-class="body_text" />
                                    </span>
                                  </Bdt>
                                </div>
                                <ul>
                                  <li style={{ lineHeight: "1.5" }}>
                                    <span data-custom-class="body_text">
                                      <span style={{ fontSize: 15 }}>
                                        <strong>
                                          To identify usage trends.
                                        </strong>{" "}
                                        We may process information about how you
                                        use our Services to better understand
                                        how they are being used so we can
                                        improve them.
                                      </span>
                                    </span>
                                    <Bdt className="statement-end-if-in-editor">
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text" />
                                      </span>
                                    </Bdt>
                                  </li>
                                </ul>
                                <div style={{ lineHeight: "1.5" }}>
                                  <Bdt className="block-component">
                                    <span style={{ fontSize: 15 }}>
                                      <span data-custom-class="body_text" />
                                    </span>
                                  </Bdt>
                                  <div style={{ lineHeight: "1.5" }}>
                                    <Bdt className="block-component">
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text" />
                                      </span>
                                    </Bdt>
                                  </div>
                                  <ul>
                                    <li style={{ lineHeight: "1.5" }}>
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                          <strong>
                                            To determine the effectiveness of
                                            our marketing and promotional
                                            campaigns.
                                          </strong>{" "}
                                          We may process your information to
                                          better understand how to provide
                                          marketing and promotional campaigns
                                          that are most relevant to you.
                                          <Bdt className="statement-end-if-in-editor" />
                                        </span>
                                      </span>
                                    </li>
                                  </ul>
                                  <div style={{ lineHeight: "1.5" }}>
                                    <Bdt className="block-component">
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text" />
                                      </span>
                                    </Bdt>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <Bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </Bdt>
                                    </div>
                                    <ul>
                                      <li style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <strong>
                                              To save or protect an individual's
                                              vital interest.
                                            </strong>{" "}
                                            We may process your information when
                                            necessary to save or protect an
                                            individual’s vital interest, such as
                                            to prevent harm.
                                          </span>
                                        </span>
                                        <Bdt className="statement-end-if-in-editor">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </li>
                                    </ul>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <Bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </Bdt>
                                      <Bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </Bdt>
                                      <Bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </Bdt>
                                      <Bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </Bdt>
                                    </div>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <br />
                                    </div>
                                    <div
                                      id="legalbases"
                                      style={{ lineHeight: "1.5" }}
                                    >
                                      <strong>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="heading_1">
                                            3. WHAT LEGAL BASES DO WE RELY ON TO
                                            PROCESS YOUR INFORMATION?
                                          </span>
                                        </span>
                                      </strong>
                                    </div>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <em>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <strong>In Short:&nbsp;</strong>We
                                            only process your personal
                                            information when we believe it is
                                            necessary and we have a valid legal
                                            reason (i.e.
                                            <Bdt className="block-component" />,
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            legal basis) to do so under
                                            applicable law, like with your
                                            consent, to comply with laws, to
                                            provide you with services to enter
                                            into or{" "}
                                            <Bdt className="block-component" />
                                            fulfill
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            our contractual obligations, to
                                            protect your rights, or to{" "}
                                            <Bdt className="block-component" />
                                            fulfill
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            our legitimate business interests.
                                          </span>
                                        </span>
                                      </em>
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                          <Bdt className="block-component" />
                                        </span>
                                        <span data-custom-class="body_text">
                                          <Bdt className="block-component" />
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <em>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <strong>
                                              <u>
                                                If you are located in the EU or
                                                UK, this section applies to you.
                                              </u>
                                            </strong>
                                          </span>
                                        </span>
                                      </em>
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                          <Bdt className="statement-end-if-in-editor" />
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                          The General Data Protection Regulation
                                          (GDPR) and UK GDPR require us to
                                          explain the valid legal bases we rely
                                          on in order to process your personal
                                          information. As such, we may rely on
                                          the following legal bases to process
                                          your personal information:
                                        </span>
                                      </span>
                                    </div>
                                    <ul>
                                      <li style={{ lineHeight: "1.5" }}>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <strong>Consent.&nbsp;</strong>We
                                            may process your information if you
                                            have given us permission (i.e.
                                            <Bdt className="block-component" />,
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            consent) to use your personal
                                            information for a specific purpose.
                                            You can withdraw your consent at any
                                            time. Click&nbsp;
                                          </span>
                                        </span>
                                        <a
                                          data-custom-class="link"
                                          href="#withdrawconsent"
                                        >
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                              here
                                            </span>
                                          </span>
                                        </a>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            &nbsp;to learn more.
                                          </span>
                                        </span>
                                      </li>
                                    </ul>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <Bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </Bdt>
                                    </div>
                                    <ul>
                                      <li style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <strong>
                                              Performance of a Contract.
                                            </strong>{" "}
                                            We may process your personal
                                            information when we believe it is
                                            necessary to{" "}
                                            <Bdt className="block-component" />
                                            fulfill
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            our contractual obligations to you,
                                            including providing our Services or
                                            at your request prior to entering
                                            into a contract with you.
                                          </span>
                                        </span>
                                        <Bdt className="statement-end-if-in-editor">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </li>
                                    </ul>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <Bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </Bdt>
                                    </div>
                                    <ul>
                                      <li style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <strong>
                                              Legitimate Interests.
                                            </strong>{" "}
                                            We may process your information when
                                            we believe it is reasonably
                                            necessary to achieve our legitimate
                                            business interests and those
                                            interests do not outweigh your
                                            interests and fundamental rights and
                                            freedoms. For example, we may
                                            process your personal information
                                            for some of the purposes described
                                            in order to:
                                          </span>
                                        </span>
                                      </li>
                                    </ul>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <span data-custom-class="body_text">
                                        <span style={{ fontSize: 15 }}>
                                          <Bdt className="block-component" />
                                        </span>
                                      </span>
                                    </div>
                                    <ul style={{ marginLeft: 40 }}>
                                      <li style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            Send users information about special
                                            offers and discounts on our products
                                            and services
                                            <Bdt className="statement-end-if-in-editor" />
                                          </span>
                                        </span>
                                      </li>
                                    </ul>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <span data-custom-class="body_text">
                                        <span style={{ fontSize: 15 }}>
                                          <Bdt className="block-component" />
                                        </span>
                                      </span>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul style={{ marginLeft: 40 }}>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              <Bdt className="block-component" />
                                              Analyze
                                              <Bdt className="statement-end-if-in-editor" />{" "}
                                              how our services are used so we
                                              can improve them to engage and
                                              retain users
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul style={{ marginLeft: 40 }}>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              Support our marketing activities
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul style={{ marginLeft: 40 }}>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              Diagnose problems and/or prevent
                                              fraudulent activities
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul style={{ marginLeft: 40 }}>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              Understand how our users use our
                                              products and services so we can
                                              improve user experience
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                        <Bdt className="statement-end-if-in-editor">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                        <Bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              <strong>
                                                Legal Obligations.
                                              </strong>{" "}
                                              We may process your information
                                              where we believe it is necessary
                                              for compliance with our legal
                                              obligations, such as to cooperate
                                              with a law enforcement body or
                                              regulatory agency, exercise or
                                              defend our legal rights, or
                                              disclose your information as
                                              evidence in litigation in which we
                                              are involved.
                                              <Bdt className="statement-end-if-in-editor" />
                                              <br />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <Bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              <strong>Vital Interests.</strong>{" "}
                                              We may process your information
                                              where we believe it is necessary
                                              to protect your vital interests or
                                              the vital interests of a third
                                              party, such as situations
                                              involving potential threats to the
                                              safety of any person.
                                            </span>
                                          </span>
                                          <Bdt className="statement-end-if-in-editor">
                                            <span style={{ fontSize: 15 }}>
                                              <span data-custom-class="body_text" />
                                            </span>
                                          </Bdt>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <Bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            In legal terms, we are generally the{" "}
                                            <Bdt className="block-component" />
                                            "data controller"
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            under European data protection laws
                                            of the personal information
                                            described in this privacy notice,
                                            since we determine the means and/or
                                            purposes of the data processing we
                                            perform. This privacy notice does
                                            not apply to the personal
                                            information we process as a{" "}
                                            <Bdt className="block-component" />
                                            "data processor"
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            on behalf of our customers. In those
                                            situations, the customer that we
                                            provide services to and with whom we
                                            have entered into a data processing
                                            agreement is the{" "}
                                            <Bdt className="block-component" />
                                            "data controller"
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            responsible for your personal
                                            information, and we merely process
                                            your information on their behalf in
                                            accordance with your instructions.
                                            If you want to know more about our
                                            customers' privacy practices, you
                                            should read their privacy policies
                                            and direct any questions you have to
                                            them.
                                          </span>
                                        </span>
                                        <Bdt className="statement-end-if-in-editor">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                        <Bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <br />
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <strong>
                                              <u>
                                                <em>
                                                  If you are located in Canada,
                                                  this section applies to you.
                                                </em>
                                              </u>
                                            </strong>
                                            <Bdt className="statement-end-if-in-editor" />
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <br />
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            We may process your information if
                                            you have given us specific
                                            permission (i.e.
                                            <Bdt className="block-component" />,
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            express consent) to use your
                                            personal information for a specific
                                            purpose, or in situations where your
                                            permission can be inferred (i.e.
                                            <Bdt className="block-component" />,
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            implied consent). You can withdraw
                                            your consent at any time.
                                            Click&nbsp;
                                          </span>
                                        </span>
                                        <a
                                          data-custom-class="link"
                                          href="#withdrawconsent"
                                        >
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              here
                                            </span>
                                          </span>
                                        </a>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            &nbsp;to learn more.
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <br />
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            In some exceptional cases, we may be
                                            legally permitted under applicable
                                            law to process your information
                                            without your consent, including, for
                                            example:
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              If collection is clearly in the
                                              interests of an individual and
                                              consent cannot be obtained in a
                                              timely way
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              For investigations and fraud
                                              detection and prevention
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <Bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              For business transactions provided
                                              certain conditions are met
                                            </span>
                                          </span>
                                          <Bdt className="statement-end-if-in-editor">
                                            <span style={{ fontSize: 15 }}>
                                              <span data-custom-class="body_text" />
                                            </span>
                                          </Bdt>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <Bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              If it is contained in a witness
                                              statement and the collection is
                                              necessary to assess, process, or
                                              settle an insurance claim
                                            </span>
                                          </span>
                                          <Bdt className="statement-end-if-in-editor">
                                            <span style={{ fontSize: 15 }}>
                                              <span data-custom-class="body_text" />
                                            </span>
                                          </Bdt>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <Bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              For identifying injured, ill, or
                                              deceased persons and communicating
                                              with next of kin
                                            </span>
                                          </span>
                                          <Bdt className="statement-end-if-in-editor">
                                            <span style={{ fontSize: 15 }}>
                                              <span data-custom-class="body_text" />
                                            </span>
                                          </Bdt>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              If we have reasonable grounds to
                                              believe an individual has been,
                                              is, or may be victim of financial
                                              abuse
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              If it is reasonable to expect
                                              collection and use with consent
                                              would compromise the availability
                                              or the accuracy of the information
                                              and the collection is reasonable
                                              for purposes related to
                                              investigating a breach of an
                                              agreement or a contravention of
                                              the laws of Canada or a province
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              If disclosure is required to
                                              comply with a subpoena, warrant,
                                              court order, or rules of the court
                                              relating to the production of
                                              records
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <Bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                              If it was produced by an
                                              individual in the course of their
                                              employment, business, or
                                              profession and the collection is
                                              consistent with the purposes for
                                              which the information was produced
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                              If the collection is solely for
                                              journalistic, artistic, or
                                              literary purposes
                                              <Bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                              If the information is publicly
                                              available and is specified by the
                                              regulations
                                            </span>
                                            <Bdt className="statement-end-if-in-editor">
                                              <span data-custom-class="body_text" />
                                            </Bdt>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <Bdt className="statement-end-if-in-editor">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                        <Bdt className="statement-end-if-in-editor">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </Bdt>
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <br />
                                      </div>
                                      <div
                                        id="whoshare"
                                        style={{ lineHeight: "1.5" }}
                                      >
                                        <span
                                          style={{
                                            color: "rgb(127, 127, 127)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(89, 89, 89)",
                                              fontSize: 15
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)"
                                              }}
                                            >
                                              <span
                                                style={{
                                                  fontSize: 15,
                                                  color: "rgb(89, 89, 89)"
                                                }}
                                              >
                                                <span
                                                  id="control"
                                                  style={{
                                                    color: "rgb(0, 0, 0)"
                                                  }}
                                                >
                                                  <strong>
                                                    <span data-custom-class="heading_1">
                                                      4. WHEN AND WITH WHOM DO
                                                      WE SHARE YOUR PERSONAL
                                                      INFORMATION?
                                                    </span>
                                                  </strong>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <br />
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <strong>
                                                <em>In Short:</em>
                                              </strong>
                                              <em>
                                                &nbsp;We may share information
                                                in specific situations described
                                                in this section and/or with the
                                                following{" "}
                                                <Bdt className="block-component" />
                                                categories of{" "}
                                                <Bdt className="statement-end-if-in-editor" />
                                                third parties.
                                              </em>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <br />
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <Bdt className="block-component" />
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <strong>
                                              Vendors, Consultants, and Other
                                              Third-Party Service Providers.
                                            </strong>{" "}
                                            We may share your data with
                                            third-party vendors, service
                                            providers, contractors, or agents (
                                            <Bdt className="block-component" />"
                                            <strong>third parties</strong>"
                                            <Bdt className="statement-end-if-in-editor" />
                                            ) who perform services for us or on
                                            our behalf and require access to
                                            such information to do that work.{" "}
                                            <Bdt className="block-component" />
                                            We have contracts in place with our
                                            third parties, which are designed to
                                            help safeguard your personal
                                            information. This means that they
                                            cannot do anything with your
                                            personal information unless we have
                                            instructed them to do it. They will
                                            also not share your personal
                                            information with any{" "}
                                            <Bdt className="block-component" />
                                            organization
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            apart from us. They also commit to
                                            protect the data they hold on our
                                            behalf and to retain it for the
                                            period we instruct.{" "}
                                            <Bdt className="statement-end-if-in-editor" />
                                            The{" "}
                                            <Bdt className="block-component" />
                                            categories of{" "}
                                            <Bdt className="statement-end-if-in-editor" />
                                            third parties we may share personal
                                            information with are as follows:
                                          </span>
                                        </span>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <Bdt className="block-component" />
                                              <Bdt className="forloop-component" />
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)"
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <Bdt className="question">
                                                  Data Analytics Services
                                                </Bdt>
                                              </span>
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <span
                                                  style={{
                                                    color: "rgb(89, 89, 89)"
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <Bdt className="block-component">
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                                color:
                                                                  "rgb(89, 89, 89)"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <Bdt className="forloop-component" />
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </Bdt>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)"
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <Bdt className="question">
                                                  Social Networks
                                                </Bdt>
                                              </span>
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <span
                                                  style={{
                                                    color: "rgb(89, 89, 89)"
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <Bdt className="block-component">
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                                color:
                                                                  "rgb(89, 89, 89)"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <Bdt className="forloop-component" />
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </Bdt>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)"
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <Bdt className="question">
                                                  Performance Monitoring Tools
                                                </Bdt>
                                              </span>
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <span
                                                  style={{
                                                    color: "rgb(89, 89, 89)"
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <Bdt className="block-component">
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                                color:
                                                                  "rgb(89, 89, 89)"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <Bdt className="forloop-component" />
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </Bdt>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)"
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <Bdt className="question">
                                                  Payment Processors
                                                </Bdt>
                                              </span>
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <span
                                                  style={{
                                                    color: "rgb(89, 89, 89)"
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <Bdt className="block-component">
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                                color:
                                                                  "rgb(89, 89, 89)"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <Bdt className="forloop-component" />
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </Bdt>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)"
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <Bdt className="question">
                                                  Communication &amp;
                                                  Collaboration Tools
                                                </Bdt>
                                              </span>
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <span
                                                  style={{
                                                    color: "rgb(89, 89, 89)"
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <Bdt className="block-component">
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                                color:
                                                                  "rgb(89, 89, 89)"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <Bdt className="forloop-component" />
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </Bdt>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)"
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <Bdt className="question">
                                                  Sales &amp; Marketing Tools
                                                </Bdt>
                                              </span>
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <span
                                                  style={{
                                                    color: "rgb(89, 89, 89)"
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <Bdt className="block-component">
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                                color:
                                                                  "rgb(89, 89, 89)"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <Bdt className="forloop-component" />
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </Bdt>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)"
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <Bdt className="question">
                                                  User Account Registration
                                                  &amp; Authentication Services
                                                </Bdt>
                                              </span>
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)"
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)"
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <span
                                                  style={{
                                                    color: "rgb(89, 89, 89)"
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <Bdt className="block-component">
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                                color:
                                                                  "rgb(89, 89, 89)"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <Bdt className="forloop-component">
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span data-custom-class="body_text">
                                                                        <span
                                                                          style={{
                                                                            fontSize: 15
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              color:
                                                                                "rgb(89, 89, 89)"
                                                                            }}
                                                                          >
                                                                            <span data-custom-class="body_text">
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    color:
                                                                                      "rgb(89, 89, 89)"
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      fontSize: 15
                                                                                    }}
                                                                                  >
                                                                                    <span
                                                                                      style={{
                                                                                        color:
                                                                                          "rgb(89, 89, 89)"
                                                                                      }}
                                                                                    >
                                                                                      <span
                                                                                        style={{
                                                                                          fontSize: 15
                                                                                        }}
                                                                                      >
                                                                                        <span
                                                                                          style={{
                                                                                            color:
                                                                                              "rgb(89, 89, 89)"
                                                                                          }}
                                                                                        >
                                                                                          <Bdt className="statement-end-if-in-editor" />
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </Bdt>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </Bdt>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <span data-custom-class="body_text" />
                                        <span data-custom-class="body_text" />
                                        <span data-custom-class="body_text">
                                          <Bdt className="block-component" />
                                        </span>
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <span data-custom-class="body_text" />
                                        <span data-custom-class="body_text" />
                                        <span data-custom-class="body_text" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <span data-custom-class="body_text" />
                                        <span data-custom-class="body_text" />
                                        <span data-custom-class="body_text" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <Bdt className="block-component" />
                                        <span data-custom-class="body_text" />
                                        <span data-custom-class="body_text" />
                                        <span data-custom-class="body_text" />
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <br />
                                      </div>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            We{" "}
                                            <Bdt className="block-component" />
                                            also{" "}
                                            <Bdt className="statement-end-if-in-editor" />{" "}
                                            may need to share your personal
                                            information in the following
                                            situations:
                                          </span>
                                        </span>
                                      </div>
                                      <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                              <strong>
                                                Business Transfers.
                                              </strong>{" "}
                                              We may share or transfer your
                                              information in connection with, or
                                              during negotiations of, any
                                              merger, sale of company assets,
                                              financing, or acquisition of all
                                              or a portion of our business to
                                              another company.
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <Bdt className="block-component" />
                                          </span>
                                        </span>
                                        <div style={{ lineHeight: "1.5" }}>
                                          <span style={{ fontSize: 15 }}>
                                            <Bdt className="block-component">
                                              <span data-custom-class="body_text" />
                                            </Bdt>
                                          </span>
                                          <div style={{ lineHeight: "1.5" }}>
                                            <Bdt className="block-component">
                                              <span style={{ fontSize: 15 }}>
                                                <span data-custom-class="body_text" />
                                              </span>
                                            </Bdt>
                                            <div style={{ lineHeight: "1.5" }}>
                                              <Bdt className="block-component">
                                                <span style={{ fontSize: 15 }}>
                                                  <span data-custom-class="body_text" />
                                                </span>
                                              </Bdt>
                                              <div
                                                style={{ lineHeight: "1.5" }}
                                              >
                                                <Bdt className="block-component">
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span data-custom-class="body_text" />
                                                  </span>
                                                </Bdt>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <Bdt className="block-component">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span data-custom-class="body_text" />
                                                    </span>
                                                  </Bdt>
                                                  <span
                                                    style={{
                                                      color: "rgb(89, 89, 89)",
                                                      fontSize: 15
                                                    }}
                                                  >
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <Bdt className="block-component">
                                                              <span data-custom-class="heading_1" />
                                                            </Bdt>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="cookies"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                5. DO WE USE
                                                                COOKIES AND
                                                                OTHER TRACKING
                                                                TECHNOLOGIES?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <em>In Short:</em>
                                                        </strong>
                                                        <em>
                                                          &nbsp;We may use
                                                          cookies and other
                                                          tracking technologies
                                                          to collect and store
                                                          your information.
                                                        </em>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        We may use cookies and
                                                        similar tracking
                                                        technologies (like web
                                                        beacons and pixels) to
                                                        access or store
                                                        information. Specific
                                                        information about how we
                                                        use such technologies
                                                        and how you can refuse
                                                        certain cookies is set
                                                        out in our Cookie Notice
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <Bdt className="block-component" />
                                                          </span>
                                                        </span>
                                                        :{" "}
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <Bdt className="question">
                                                              <a
                                                                href="https://hexavatar.com/legal/cookies"
                                                                
                                                                data-custom-class="link"
                                                              >
                                                                https://hexavatar.com/legal/cookies
                                                              </a>
                                                            </Bdt>
                                                          </span>
                                                        </span>
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <Bdt className="block-component" />
                                                          .
                                                        </span>
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              fontSize: 15
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                color:
                                                                  "rgb(89, 89, 89)"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <Bdt className="statement-end-if-in-editor" />
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                    <span data-custom-class="body_text">
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)",
                                                          fontSize: 15
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)",
                                                              fontSize: 15
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span data-custom-class="body_text">
                                                                      <Bdt className="block-component" />
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="sociallogins"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                6. HOW DO WE
                                                                HANDLE YOUR
                                                                SOCIAL LOGINS?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <em>
                                                            In Short:&nbsp;
                                                          </em>
                                                        </strong>
                                                        <em>
                                                          If you choose to
                                                          register or log in to
                                                          our services using a
                                                          social media account,
                                                          we may have access to
                                                          certain information
                                                          about you.
                                                        </em>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        Our Services offer you
                                                        the ability to register
                                                        and log in using your
                                                        third-party social media
                                                        account details (like
                                                        your Facebook or Twitter
                                                        logins). Where you
                                                        choose to do this, we
                                                        will receive certain
                                                        profile information
                                                        about you from your
                                                        social media provider.
                                                        The profile information
                                                        we receive may vary
                                                        depending on the social
                                                        media provider
                                                        concerned, but will
                                                        often include your name,
                                                        email address, friends
                                                        list, and profile
                                                        picture, as well as
                                                        other information you
                                                        choose to make public on
                                                        such a social media
                                                        platform.{" "}
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="block-component" />
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        We will use the
                                                        information we receive
                                                        only for the purposes
                                                        that are described in
                                                        this privacy notice or
                                                        that are otherwise made
                                                        clear to you on the
                                                        relevant Services.
                                                        Please note that we do
                                                        not control, and are not
                                                        responsible for, other
                                                        uses of your personal
                                                        information by your
                                                        third-party social media
                                                        provider. We recommend
                                                        that you review their
                                                        privacy notice to
                                                        understand how they
                                                        collect, use, and share
                                                        your personal
                                                        information, and how you
                                                        can set your privacy
                                                        preferences on their
                                                        sites and apps.
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)",
                                                              fontSize: 15
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                color:
                                                                  "rgb(89, 89, 89)",
                                                                fontSize: 15
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(89, 89, 89)",
                                                                  fontSize: 15
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <Bdt className="statement-end-if-in-editor" />
                                                                        </span>
                                                                        <Bdt className="block-component">
                                                                          <span data-custom-class="body_text">
                                                                            <Bdt className="block-component" />
                                                                          </span>
                                                                        </Bdt>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="intltransfers"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                7. IS YOUR
                                                                INFORMATION
                                                                TRANSFERRED
                                                                INTERNATIONALLY?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <em>
                                                            In Short:&nbsp;
                                                          </em>
                                                        </strong>
                                                        <em>
                                                          We may transfer,
                                                          store, and process
                                                          your information in
                                                          countries other than
                                                          your own.
                                                        </em>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        Our servers are located
                                                        in
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="forloop-component" />
                                                              <Bdt className="block-component" />
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color:
                                                                    "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <Bdt className="block-component" />
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>{" "}
                                                              the{" "}
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color:
                                                                    "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <Bdt className="question">
                                                                            United
                                                                            States
                                                                          </Bdt>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <Bdt className="block-component" />
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <Bdt className="block-component" />
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <Bdt className="forloop-component" />
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        . If you are accessing
                                                        our Services from
                                                        outside
                                                      </span>
                                                      <span data-custom-class="body_text">
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="forloop-component" />
                                                              <Bdt className="block-component" />
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color:
                                                                    "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <Bdt className="block-component" />
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>{" "}
                                                              the{" "}
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color:
                                                                    "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <Bdt className="question">
                                                                            United
                                                                            States
                                                                          </Bdt>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <Bdt className="block-component" />
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <Bdt className="block-component" />
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <Bdt className="forloop-component" />
                                                  <span data-custom-class="body_text">
                                                    , please be aware that your
                                                    information may be
                                                    transferred to, stored, and
                                                    processed by us in our
                                                    facilities and by those
                                                    third parties with whom we
                                                    may share your personal
                                                    information (see{" "}
                                                    <Bdt className="block-component" />
                                                    "
                                                    <Bdt className="statement-end-if-in-editor" />
                                                  </span>
                                                  <a
                                                    data-custom-class="link"
                                                    href="#whoshare"
                                                  >
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        WHEN AND WITH WHOM DO WE
                                                        SHARE YOUR PERSONAL
                                                        INFORMATION?
                                                      </span>
                                                    </span>
                                                  </a>
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <Bdt className="block-component" />
                                                        "
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        above), in
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span
                                                      style={{
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <Bdt className="forloop-component" />
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color:
                                                                    "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <Bdt className="block-component" />
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15,
                                                                              color:
                                                                                "rgb(89, 89, 89)"
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                fontSize: 15,
                                                                                color:
                                                                                  "rgb(89, 89, 89)"
                                                                              }}
                                                                            >
                                                                              <span data-custom-class="body_text">
                                                                                <span
                                                                                  style={{
                                                                                    fontSize: 15
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      color:
                                                                                        "rgb(89, 89, 89)"
                                                                                    }}
                                                                                  >
                                                                                    <span data-custom-class="body_text">
                                                                                      <Bdt className="block-component" />
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>{" "}
                                                                          the{" "}
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15,
                                                                              color:
                                                                                "rgb(89, 89, 89)"
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                fontSize: 15,
                                                                                color:
                                                                                  "rgb(89, 89, 89)"
                                                                              }}
                                                                            >
                                                                              <span data-custom-class="body_text">
                                                                                <span
                                                                                  style={{
                                                                                    fontSize: 15
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      color:
                                                                                        "rgb(89, 89, 89)"
                                                                                    }}
                                                                                  >
                                                                                    <span data-custom-class="body_text">
                                                                                      <Bdt className="question">
                                                                                        United
                                                                                        States,
                                                                                      </Bdt>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                              <span data-custom-class="body_text">
                                                                                <span
                                                                                  style={{
                                                                                    fontSize: 15
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      color:
                                                                                        "rgb(89, 89, 89)"
                                                                                    }}
                                                                                  >
                                                                                    <span data-custom-class="body_text">
                                                                                      <Bdt className="block-component" />
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15,
                                                                              color:
                                                                                "rgb(89, 89, 89)"
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                fontSize: 15,
                                                                                color:
                                                                                  "rgb(89, 89, 89)"
                                                                              }}
                                                                            >
                                                                              <span data-custom-class="body_text">
                                                                                <span
                                                                                  style={{
                                                                                    fontSize: 15
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      color:
                                                                                        "rgb(89, 89, 89)"
                                                                                    }}
                                                                                  >
                                                                                    <span data-custom-class="body_text">
                                                                                      <Bdt className="else-block" />
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                        <Bdt className="forloop-component" />
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        &nbsp;and other
                                                        countries.
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        If you are a resident in
                                                        the European Economic
                                                        Area (EEA) or United
                                                        Kingdom (UK), then these
                                                        countries may not
                                                        necessarily have data
                                                        protection laws or other
                                                        similar laws as
                                                        comprehensive as those
                                                        in your country.
                                                        However, we will take
                                                        all necessary measures
                                                        to protect your personal
                                                        information in
                                                        accordance with this
                                                        privacy notice and
                                                        applicable law.
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="block-component" />
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        European Commission's
                                                        Standard Contractual
                                                        Clauses:
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        We have implemented
                                                        measures to protect your
                                                        personal information,
                                                        including by using the
                                                        European Commission's
                                                        Standard Contractual
                                                        Clauses for transfers of
                                                        personal information
                                                        between our group
                                                        companies and between us
                                                        and our third-party
                                                        providers. These clauses
                                                        require all recipients
                                                        to protect all personal
                                                        information that they
                                                        process originating from
                                                        the EEA or UK in
                                                        accordance with European
                                                        data protection laws and
                                                        regulations.
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="block-component" />
                                                            </span>
                                                          </span>
                                                          &nbsp;
                                                        </span>
                                                        Our Standard Contractual
                                                        Clauses can be provided
                                                        upon request.
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="statement-end-if-in-editor" />
                                                            </span>
                                                          </span>
                                                          &nbsp;
                                                        </span>
                                                        We have implemented
                                                        similar appropriate
                                                        safeguards with our
                                                        third-party service
                                                        providers and partners
                                                        and further details can
                                                        be provided upon
                                                        request.
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <span
                                                                style={{
                                                                  fontSize: 15
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <Bdt className="statement-end-if-in-editor" />
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span
                                                      style={{
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <Bdt className="block-component" />
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          <Bdt className="block-component" />
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)",
                                                              fontSize: 15
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                color:
                                                                  "rgb(89, 89, 89)",
                                                                fontSize: 15
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(89, 89, 89)",
                                                                  fontSize: 15
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "rgb(89, 89, 89)"
                                                                          }}
                                                                        >
                                                                          <span data-custom-class="body_text">
                                                                            <Bdt className="statement-end-if-in-editor" />
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="inforetain"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                8. HOW LONG DO
                                                                WE KEEP YOUR
                                                                INFORMATION?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <em>
                                                            In Short:&nbsp;
                                                          </em>
                                                        </strong>
                                                        <em>
                                                          We keep your
                                                          information for as
                                                          long as necessary to{" "}
                                                          <Bdt className="block-component" />
                                                          fulfill
                                                          <Bdt className="statement-end-if-in-editor" />{" "}
                                                          the purposes outlined
                                                          in this privacy notice
                                                          unless otherwise
                                                          required by law.
                                                        </em>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        We will only keep your
                                                        personal information for
                                                        as long as it is
                                                        necessary for the
                                                        purposes set out in this
                                                        privacy notice, unless a
                                                        longer retention period
                                                        is required or permitted
                                                        by law (such as tax,
                                                        accounting, or other
                                                        legal requirements). No
                                                        purpose in this notice
                                                        will require us keeping
                                                        your personal
                                                        information for longer
                                                        than{" "}
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="block-component" />
                                                            </span>
                                                          </span>
                                                        </span>
                                                        <Bdt className="block-component" />
                                                        the period of time in
                                                        which users have an
                                                        account with us
                                                        <Bdt className="block-component" />
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="else-block" />
                                                            </span>
                                                          </span>
                                                        </span>
                                                        .
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        When we have no ongoing
                                                        legitimate business need
                                                        to process your personal
                                                        information, we will
                                                        either delete or{" "}
                                                        <Bdt className="block-component" />
                                                        anonymize
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        such information, or, if
                                                        this is not possible
                                                        (for example, because
                                                        your personal
                                                        information has been
                                                        stored in backup
                                                        archives), then we will
                                                        securely store your
                                                        personal information and
                                                        isolate it from any
                                                        further processing until
                                                        deletion is possible.
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <Bdt className="block-component" />
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="infosafe"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                9. HOW DO WE
                                                                KEEP YOUR
                                                                INFORMATION
                                                                SAFE?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <em>
                                                            In Short:&nbsp;
                                                          </em>
                                                        </strong>
                                                        <em>
                                                          We aim to protect your
                                                          personal information
                                                          through a system of{" "}
                                                          <Bdt className="block-component" />
                                                          organizational
                                                          <Bdt className="statement-end-if-in-editor" />{" "}
                                                          and technical security
                                                          measures.
                                                        </em>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        We have implemented
                                                        appropriate and
                                                        reasonable technical and{" "}
                                                        <Bdt className="block-component" />
                                                        organizational
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        security measures
                                                        designed to protect the
                                                        security of any personal
                                                        information we process.
                                                        However, despite our
                                                        safeguards and efforts
                                                        to secure your
                                                        information, no
                                                        electronic transmission
                                                        over the Internet or
                                                        information storage
                                                        technology can be
                                                        guaranteed to be 100%
                                                        secure, so we cannot
                                                        promise or guarantee
                                                        that hackers,
                                                        cybercriminals, or other{" "}
                                                        <Bdt className="block-component" />
                                                        unauthorized
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        third parties will not
                                                        be able to defeat our
                                                        security and improperly
                                                        collect, access, steal,
                                                        or modify your
                                                        information. Although we
                                                        will do our best to
                                                        protect your personal
                                                        information,
                                                        transmission of personal
                                                        information to and from
                                                        our Services is at your
                                                        own risk. You should
                                                        only access the Services
                                                        within a secure
                                                        environment.
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <Bdt className="statement-end-if-in-editor" />
                                                        </span>
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <Bdt className="block-component" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="privacyrights"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                10. WHAT ARE
                                                                YOUR PRIVACY
                                                                RIGHTS?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <em>In Short:</em>
                                                        </strong>
                                                        <em>
                                                          &nbsp;
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <em>
                                                                  <Bdt className="block-component" />
                                                                </em>
                                                              </span>
                                                            </span>
                                                          </span>
                                                          In some regions, such
                                                          as{" "}
                                                          <Bdt className="block-component" />
                                                          the European Economic
                                                          Area (EEA), United
                                                          Kingdom (UK), and
                                                          Canada
                                                          <Bdt className="block-component" />
                                                          , you have rights that
                                                          allow you greater
                                                          access to and control
                                                          over your personal
                                                          information.
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <em>
                                                                  <Bdt className="statement-end-if-in-editor" />
                                                                </em>
                                                              </span>
                                                            </span>
                                                            &nbsp;
                                                          </span>
                                                          You may review,
                                                          change, or terminate
                                                          your account at any
                                                          time.
                                                        </em>
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              fontSize: 15
                                                            }}
                                                          >
                                                            <Bdt className="block-component" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        In some regions (like{" "}
                                                        <Bdt className="block-component" />
                                                        the EEA, UK, and Canada
                                                        <Bdt className="block-component" />
                                                        ), you have certain
                                                        rights under applicable
                                                        data protection laws.
                                                        These may include the
                                                        right (i) to request
                                                        access and obtain a copy
                                                        of your personal
                                                        information, (ii) to
                                                        request rectification or
                                                        erasure; (iii) to
                                                        restrict the processing
                                                        of your personal
                                                        information; and (iv) if
                                                        applicable, to data
                                                        portability. In certain
                                                        circumstances, you may
                                                        also have the right to
                                                        object to the processing
                                                        of your personal
                                                        information. You can
                                                        make such a request by
                                                        contacting us by using
                                                        the contact details
                                                        provided in the section{" "}
                                                        <Bdt className="block-component" />
                                                        "
                                                        <Bdt className="statement-end-if-in-editor" />
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <a
                                                    data-custom-class="link"
                                                    href="#contact"
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          HOW CAN YOU CONTACT US
                                                          ABOUT THIS NOTICE?
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </a>
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <Bdt className="block-component" />
                                                        "
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        below.
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        We will consider and act
                                                        upon any request in
                                                        accordance with
                                                        applicable data
                                                        protection laws.
                                                      </span>
                                                      <span data-custom-class="body_text">
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <Bdt className="statement-end-if-in-editor" />
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    &nbsp;
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        If you are located in
                                                        the EEA or UK and you
                                                        believe we are
                                                        unlawfully processing
                                                        your personal
                                                        information, you also
                                                        have the right to
                                                        complain to your local
                                                        data protection
                                                        supervisory authority.
                                                        You can find their
                                                        contact details here:{" "}
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(48, 48, 241)"
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <a
                                                                    data-custom-class="link"
                                                                    href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                                                                    rel="noopener noreferrer"
                                                                    
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                                                                    </span>
                                                                  </a>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                        .
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        If you are located in
                                                        Switzerland, the contact
                                                        details for the data
                                                        protection authorities
                                                        are available here:{" "}
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(48, 48, 241)"
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15
                                                                    }}
                                                                  >
                                                                    <a
                                                                      data-custom-class="link"
                                                                      href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                                                                      rel="noopener noreferrer"
                                                                      
                                                                    >
                                                                      https://www.edoeb.admin.ch/edoeb/en/home.html
                                                                    </a>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                        .
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="withdrawconsent"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <u>
                                                            Withdrawing your
                                                            consent:
                                                          </u>
                                                        </strong>{" "}
                                                        If we are relying on
                                                        your consent to process
                                                        your personal
                                                        information,
                                                        <Bdt className="block-component" />{" "}
                                                        which may be express
                                                        and/or implied consent
                                                        depending on the
                                                        applicable law,
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        you have the right to
                                                        withdraw your consent at
                                                        any time. You can
                                                        withdraw your consent at
                                                        any time by contacting
                                                        us by using the contact
                                                        details provided in the
                                                        section{" "}
                                                        <Bdt className="block-component" />
                                                        "
                                                        <Bdt className="statement-end-if-in-editor" />
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <a
                                                    data-custom-class="link"
                                                    href="#contact"
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          HOW CAN YOU CONTACT US
                                                          ABOUT THIS NOTICE?
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </a>
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <Bdt className="block-component" />
                                                        "
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        below
                                                        <Bdt className="block-component" />{" "}
                                                        or updating your
                                                        preferences
                                                        <Bdt className="statement-end-if-in-editor" />
                                                        .
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      However, please note that
                                                      this will not affect the
                                                      lawfulness of the
                                                      processing before its
                                                      withdrawal, nor
                                                      <Bdt className="block-component" />{" "}
                                                      when applicable law
                                                      allows,
                                                      <Bdt className="statement-end-if-in-editor" />{" "}
                                                      will it affect the
                                                      processing of your
                                                      personal information
                                                      conducted in reliance on
                                                      lawful processing grounds
                                                      other than consent.
                                                      <Bdt className="block-component" />
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <strong>
                                                        <u>
                                                          Opting out of
                                                          marketing and
                                                          promotional
                                                          communications:
                                                        </u>
                                                      </strong>
                                                      <strong>
                                                        <u>&nbsp;</u>
                                                      </strong>
                                                      You can unsubscribe from
                                                      our marketing and
                                                      promotional communications
                                                      at any time by
                                                      <Bdt className="block-component" />{" "}
                                                      clicking on the
                                                      unsubscribe link in the
                                                      emails that we send,
                                                      <Bdt className="statement-end-if-in-editor" />
                                                      <Bdt className="block-component" />{" "}
                                                      replying{" "}
                                                      <Bdt className="block-component" />
                                                      "STOP" or "UNSUBSCRIBE"
                                                      <Bdt className="statement-end-if-in-editor" />{" "}
                                                      to the SMS messages that
                                                      we send,
                                                      <Bdt className="statement-end-if-in-editor" />
                                                      <Bdt className="block-component" />{" "}
                                                      or by contacting us using
                                                      the details provided in
                                                      the section{" "}
                                                      <Bdt className="block-component" />
                                                      "
                                                      <Bdt className="statement-end-if-in-editor" />
                                                    </span>
                                                  </span>
                                                  <a
                                                    data-custom-class="link"
                                                    href="#contact"
                                                  >
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        HOW CAN YOU CONTACT US
                                                        ABOUT THIS NOTICE?
                                                      </span>
                                                    </span>
                                                  </a>
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <Bdt className="block-component" />
                                                      "
                                                      <Bdt className="statement-end-if-in-editor" />{" "}
                                                      below. You will then be
                                                      removed from the marketing
                                                      lists. However, we may
                                                      still communicate with you
                                                      — for example, to send you
                                                      service-related messages
                                                      that are necessary for the
                                                      administration and use of
                                                      your account, to respond
                                                      to service requests, or
                                                      for other non-marketing
                                                      purposes.
                                                    </span>
                                                    <span data-custom-class="body_text">
                                                      <Bdt className="statement-end-if-in-editor" />
                                                    </span>
                                                  </span>
                                                  <Bdt className="block-component">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span data-custom-class="body_text" />
                                                    </span>
                                                  </Bdt>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span data-custom-class="heading_2">
                                                      <strong>
                                                        Account Information
                                                      </strong>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      If you would at any time
                                                      like to review or change
                                                      the information in your
                                                      account or terminate your
                                                      account, you can:
                                                      <Bdt className="forloop-component" />
                                                    </span>
                                                  </span>
                                                </div>
                                                <ul>
                                                  <li
                                                    style={{
                                                      lineHeight: "1.5"
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <span
                                                        style={{ fontSize: 15 }}
                                                      >
                                                        <Bdt className="question">
                                                          Contact us using the
                                                          contact information
                                                          provided.
                                                        </Bdt>
                                                      </span>
                                                    </span>
                                                  </li>
                                                </ul>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <Bdt className="forloop-component" />
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      Upon your request to
                                                      terminate your account, we
                                                      will deactivate or delete
                                                      your account and
                                                      information from our
                                                      active databases. However,
                                                      we may retain some
                                                      information in our files
                                                      to prevent fraud,
                                                      troubleshoot problems,
                                                      assist with any
                                                      investigations, enforce
                                                      our legal terms and/or
                                                      comply with applicable
                                                      legal requirements.
                                                    </span>
                                                  </span>
                                                  <Bdt className="statement-end-if-in-editor">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span data-custom-class="body_text" />
                                                    </span>
                                                  </Bdt>
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <Bdt className="block-component" />
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <u>
                                                            Cookies and similar
                                                            technologies:
                                                          </u>
                                                        </strong>{" "}
                                                        Most Web browsers are
                                                        set to accept cookies by
                                                        default. If you prefer,
                                                        you can usually choose
                                                        to set your browser to
                                                        remove cookies and to
                                                        reject cookies. If you
                                                        choose to remove cookies
                                                        or reject cookies, this
                                                        could affect certain
                                                        features or services of
                                                        our Services. To opt out
                                                        of interest-based
                                                        advertising by
                                                        advertisers on our
                                                        Services visit{" "}
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(48, 48, 241)"
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <a
                                                              data-custom-class="link"
                                                              href="http://www.aboutads.info/choices/"
                                                              rel="noopener noreferrer"
                                                              
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15
                                                                }}
                                                              >
                                                                http://www.aboutads.info/choices/
                                                              </span>
                                                            </a>
                                                          </span>
                                                        </span>
                                                        .{" "}
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="block-component" />
                                                            </span>
                                                          </span>
                                                        </span>
                                                        For further information,
                                                        please see our Cookie
                                                        Notice:{" "}
                                                        <span
                                                          style={{
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span data-custom-class="body_text">
                                                              <Bdt className="question">
                                                                <a
                                                                  href="https://hexavatar.com/legal/cookies"
                                                                  
                                                                  data-custom-class="link"
                                                                >
                                                                  https://hexavatar.com/legal/cookies
                                                                </a>
                                                              </Bdt>
                                                              .
                                                              <Bdt className="block-component" />
                                                              <span
                                                                style={{
                                                                  fontSize: 15
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "rgb(89, 89, 89)"
                                                                          }}
                                                                        >
                                                                          <Bdt className="statement-end-if-in-editor" />
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <Bdt className="block-component">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span data-custom-class="body_text" />
                                                    </span>
                                                  </Bdt>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      If you have questions or
                                                      comments about your
                                                      privacy rights, you may
                                                      email us at{" "}
                                                      <Bdt className="question">
                                                        help@hexavatar.com
                                                      </Bdt>
                                                      .
                                                    </span>
                                                  </span>
                                                  <Bdt className="statement-end-if-in-editor">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span data-custom-class="body_text" />
                                                    </span>
                                                  </Bdt>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="DNT"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                11. CONTROLS FOR
                                                                DO-NOT-TRACK
                                                                FEATURES
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        Most web browsers and
                                                        some mobile operating
                                                        systems and mobile
                                                        applications include a
                                                        Do-Not-Track (
                                                        <Bdt className="block-component" />
                                                        "DNT"
                                                        <Bdt className="statement-end-if-in-editor" />
                                                        ) feature or setting you
                                                        can activate to signal
                                                        your privacy preference
                                                        not to have data about
                                                        your online browsing
                                                        activities monitored and
                                                        collected. At this stage
                                                        no uniform technology
                                                        standard for{" "}
                                                        <Bdt className="block-component" />
                                                        recognizing
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        and implementing DNT
                                                        signals has been{" "}
                                                        <Bdt className="block-component" />
                                                        finalized
                                                        <Bdt className="statement-end-if-in-editor" />
                                                        . As such, we do not
                                                        currently respond to DNT
                                                        browser signals or any
                                                        other mechanism that
                                                        automatically
                                                        communicates your choice
                                                        not to be tracked
                                                        online. If a standard
                                                        for online tracking is
                                                        adopted that we must
                                                        follow in the future, we
                                                        will inform you about
                                                        that practice in a
                                                        revised version of this
                                                        privacy notice.
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="caresidents"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                12. DO
                                                                CALIFORNIA
                                                                RESIDENTS HAVE
                                                                SPECIFIC PRIVACY
                                                                RIGHTS?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <strong>
                                                          <em>
                                                            In Short:&nbsp;
                                                          </em>
                                                        </strong>
                                                        <em>
                                                          Yes, if you are a
                                                          resident of
                                                          California, you are
                                                          granted specific
                                                          rights regarding
                                                          access to your
                                                          personal information.
                                                        </em>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        California Civil Code
                                                        Section 1798.83, also
                                                        known as the{" "}
                                                        <Bdt className="block-component" />
                                                        "Shine The Light"
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        law, permits our users
                                                        who are California
                                                        residents to request and
                                                        obtain from us, once a
                                                        year and free of charge,
                                                        information about
                                                        categories of personal
                                                        information (if any) we
                                                        disclosed to third
                                                        parties for direct
                                                        marketing purposes and
                                                        the names and addresses
                                                        of all third parties
                                                        with which we shared
                                                        personal information in
                                                        the immediately
                                                        preceding calendar year.
                                                        If you are a California
                                                        resident and would like
                                                        to make such a request,
                                                        please submit your
                                                        request in writing to us
                                                        using the contact
                                                        information provided
                                                        below.
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        If you are under 18
                                                        years of age, reside in
                                                        California, and have a
                                                        registered account with
                                                        Services, you have the
                                                        right to request removal
                                                        of unwanted data that
                                                        you publicly post on the
                                                        Services. To request
                                                        removal of such data,
                                                        please contact us using
                                                        the contact information
                                                        provided below and
                                                        include the email
                                                        address associated with
                                                        your account and a
                                                        statement that you
                                                        reside in California. We
                                                        will make sure the data
                                                        is not publicly
                                                        displayed on the
                                                        Services, but please be
                                                        aware that the data may
                                                        not be completely or
                                                        comprehensively removed
                                                        from all our systems
                                                        (e.g.
                                                        <Bdt className="block-component" />
                                                        ,
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        backups, etc.).
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <Bdt className="block-component" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="policyupdates"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                13. DO WE MAKE
                                                                UPDATES TO THIS
                                                                NOTICE?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <em>
                                                          <strong>
                                                            In Short:&nbsp;
                                                          </strong>
                                                          Yes, we will update
                                                          this notice as
                                                          necessary to stay
                                                          compliant with
                                                          relevant laws.
                                                        </em>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        We may update this
                                                        privacy notice from time
                                                        to time. The updated
                                                        version will be
                                                        indicated by an updated{" "}
                                                        <Bdt className="block-component" />
                                                        "Revised"
                                                        <Bdt className="statement-end-if-in-editor" />{" "}
                                                        date and the updated
                                                        version will be
                                                        effective as soon as it
                                                        is accessible. If we
                                                        make material changes to
                                                        this privacy notice, we
                                                        may notify you either by
                                                        prominently posting a
                                                        notice of such changes
                                                        or by directly sending
                                                        you a notification. We
                                                        encourage you to review
                                                        this privacy notice
                                                        frequently to be
                                                        informed of how we are
                                                        protecting your
                                                        information.
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="contact"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                14. HOW CAN YOU
                                                                CONTACT US ABOUT
                                                                THIS NOTICE?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        If you have questions or
                                                        comments about this
                                                        notice, you may{" "}
                                                        <span
                                                          style={{
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                            fontSize: 15
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <Bdt className="block-component" />
                                                            email us at{" "}
                                                            <Bdt className="question">
                                                              help@hexavatar.com
                                                            </Bdt>
                                                            <Bdt className="statement-end-if-in-editor" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                       
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    data-custom-class="body_text"
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    If you are a resident in the
                                                    European Economic Area, the{" "}
                                                    <Bdt className="block-component" />
                                                    "data controller"
                                                    <Bdt className="statement-end-if-in-editor" />{" "}
                                                    of your personal information
                                                    is{" "}
                                                    <Bdt className="question">
                                                      Reilabs sp. z o.o.
                                                    </Bdt>
                                                    .{" "}
                                                    <Bdt className="question">
                                                      Reilabs sp. z o.o.
                                                    </Bdt>{" "}
                                                    has appointed{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <Bdt className="question">
                                                          Grzegorz Świrski
                                                        </Bdt>
                                                      </span>
                                                    </span>{" "}
                                                    to be its representative in
                                                    the EEA. You can contact
                                                    them directly regarding the
                                                    processing of your
                                                    information by{" "}
                                                    <Bdt className="question">
                                                      Reilabs sp. z o.o.
                                                    </Bdt>
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        ,
                                                        <Bdt className="block-component" />{" "}
                                                        by email at{" "}
                                                        <Bdt className="question">
                                                          help@hexavatar.com
                                                        </Bdt>
                                                        <Bdt className="statement-end-if-in-editor" />
                                                        <Bdt className="block-component" />
                                                        <Bdt className="block-component" />
                                                      </span>
                                                    </span>
                                                  </span>
                                                  <Bdt className="block-component" />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  id="request"
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      color:
                                                        "rgb(127, 127, 127)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                        fontSize: 15
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color:
                                                            "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            id="control"
                                                            style={{
                                                              color:
                                                                "rgb(0, 0, 0)"
                                                            }}
                                                          >
                                                            <strong>
                                                              <span data-custom-class="heading_1">
                                                                15. HOW CAN YOU
                                                                REVIEW, UPDATE,
                                                                OR DELETE THE
                                                                DATA WE COLLECT
                                                                FROM YOU?
                                                              </span>
                                                            </strong>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <br />
                                                </div>
                                                <div
                                                  style={{ lineHeight: "1.5" }}
                                                >
                                                  <span
                                                    style={{
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)"
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        Based on the applicable
                                                        laws of your country,
                                                        you may have the right
                                                        to request access to the
                                                        personal information we
                                                        collect from you, change
                                                        that information, or
                                                        delete it in some
                                                        circumstances. To
                                                        request to review,
                                                        update, or delete your
                                                        personal information,
                                                        please{" "}
                                                        <Bdt className="block-component" />
                                                        submit a request form by
                                                        clicking&nbsp;
                                                      </span>
                                                      <span
                                                        style={{
                                                          color:
                                                            "rgb(48, 48, 241)"
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          <span
                                                            style={{
                                                              fontSize: 15
                                                            }}
                                                          >
                                                            <a
                                                              data-custom-class="link"
                                                              href="https://app.termly.io/notify/457f5ea0-1a75-4725-a1da-da3fcf83303e"
                                                              rel="noopener noreferrer"
                                                              
                                                            >
                                                              here
                                                            </a>
                                                          </span>
                                                        </span>
                                                      </span>
                                                      <Bdt className="block-component">
                                                        <span data-custom-class="body_text" />
                                                      </Bdt>
                                                    </span>
                                                  </span>
                                                  <span data-custom-class="body_text">
                                                    .
                                                  </span>
                                                </div>
                                                <style
                                                  dangerouslySetInnerHTML={{
                                                    __html:
                                                      "\n      ul {\n        list-style-type: square;\n      }\n      ul > li > ul {\n        list-style-type: circle;\n      }\n      ul > li > ul > li > ul {\n        list-style-type: square;\n      }\n      ol li {\n        font-family: Arial ;\n      }\n    "
                                                  }}
                                                />
                                              </div>
                                           
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  )
}