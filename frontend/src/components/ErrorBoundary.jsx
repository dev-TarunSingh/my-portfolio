import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-xl text-center">
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">An unexpected error occurred while loading this section. Please try again or contact support.</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet text-white">Reload</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
