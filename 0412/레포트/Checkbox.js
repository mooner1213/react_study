import React from 'react';

class TermsOfService extends React.Component {
    render() {
        const { agreed, onAgree } = this.props;

        return (
            <div className="terms-container">
                <p>이용약관에 동의하십니까?</p>
                <label>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => onAgree(e.target.checked)}
                    />
                    동의합니다.
                </label>
            </div>
        );
    }
}

export default TermsOfService;
